#!/usr/bin/env python3
"""The Bookmuse landing's public catalog pages, built from production's public API (no token).

One page per published summary (its free part as text, then a lock wall), course, collection, category and author, the home
page's cover wall and Browse block, sitemap.xml, the summary list in llms.txt and llms-full.txt.
Docs: ../bookmuse/docs/web-dashboard.md, "The public catalog pages".

  python3 scripts/bookmuse-pages.py           build into sites/bookmuse/public
  python3 scripts/bookmuse-pages.py --ping    send the pages changed since the last ping to IndexNow (after a deploy)
  BOOKMUSE_API=http://localhost:8080 ...       build from another backend (default: production)
  BOOKMUSE_PAGES_CACHE=/some/dir ...          keep every fetch in that folder and reuse it (only for trying out this script)
"""
from html.parser import HTMLParser
import base64, datetime, hashlib, html, json, os, re, shutil, subprocess, sys, time, urllib.error, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "sites/bookmuse/public"
STATE_FILE = ROOT / "sites/bookmuse/pages-state.json"
API = os.environ.get("BOOKMUSE_API", "https://bookmuse-app.wanngo.com").rstrip("/")
READER = "https://bookmuse-app.wanngo.com"
SITE = "https://bookmuse.wanngo.com"
HOST = "bookmuse.wanngo.com"
APP_STORE = "https://apps.apple.com/us/app/bookmuse-ai-reading-companion/id6815728446"
FREE_LESSONS = 3          # the free preview: the intro and the first three lessons (subscriptions.md)
WALL_COVERS = 36          # covers on the home page's wall, the most popular first
CSS = "/catalog.css?v=1"
MANAGED_DIRS = ["summaries", "categories", "courses", "collections", "authors"]
MANAGED_ASSETS = ["assets/summaries", "assets/courses", "assets/authors"]
e = lambda s: html.escape(str(s or ""), quote=True)


# ---------- fetching ----------

CACHE = os.environ.get("BOOKMUSE_PAGES_CACHE")   # a folder: keep every fetch there (for trying out changes to this script)


def get(url, binary=False):
    if CACHE:
        f = Path(CACHE) / hashlib.sha1(url.encode()).hexdigest()
        if f.exists():
            body = f.read_bytes()
            return body if binary else body.decode("utf-8")
        body = fetch(url)
        f.parent.mkdir(parents=True, exist_ok=True)
        f.write_bytes(body)
        return body if binary else body.decode("utf-8")
    body = fetch(url)
    return body if binary else body.decode("utf-8")


def fetch(url):
    for attempt in range(6):
        req = urllib.request.Request(url, headers={"User-Agent": "bookmuse-pages/1", "Accept-Language": "en"})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                body = r.read()
            time.sleep(0.15)
            return body
        except urllib.error.HTTPError as err:
            if err.code in (429, 500, 502, 503, 504):
                wait = err.headers.get("Retry-After")
                print(f"  {err.code} from {url}, retry-after {wait}", flush=True)
                time.sleep(min(float(wait) if wait and wait.replace(".", "", 1).isdigit() else 2 ** attempt, 60))
                continue
            raise SystemExit(f"{err.code} from {url}")
        except (urllib.error.URLError, TimeoutError) as err:
            print(f"  {err} from {url}", flush=True)
            time.sleep(2 ** attempt)
    raise SystemExit(f"gave up on {url}")


def api(path):
    return json.loads(get(API + path))


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def short_title(t):
    return t.split(":")[0].strip()


def minutes(sec):
    return max(1, round((sec or 0) / 60))


def hm(sec):
    m = minutes(sec)
    return f"{m // 60} h {m % 60} min" if m >= 90 and m % 60 else (f"{m // 60} h" if m >= 60 else f"{m} min")


# ---------- images ----------

def magick(src_bytes, out, size, square=False):
    out.parent.mkdir(parents=True, exist_ok=True)
    w, h = size
    geo = f"{w}x{h}^"
    cmd = ["magick", "-", "-resize", geo, "-gravity", "center", "-extent", f"{w}x{h}", "-strip", "-quality", "78", str(out)]
    subprocess.run(cmd, input=src_bytes, check=True)


def image(url, version_key, outs, state, keep, data=None):
    """Write each (path, size) in outs from url (downloaded) or data, once per version (url is the version's name);
    keep records the files this run uses."""
    USED_IMAGES.add(version_key)
    for path, _ in outs:
        keep.add(path.relative_to(PUB).as_posix())
    if state["images"].get(version_key) == url and all(p.exists() for p, _ in outs):
        return
    if data is None:
        data = get(url, binary=True)
    for path, size in outs:
        magick(data, path, size)
    state["images"][version_key] = url


# ---------- locked lessons ----------

DROP_ATTR = {"src", "srcset", "poster", "alt", "title", "aria-label", "aria-description", "aria-valuetext", "placeholder", "label", "content"}


class _Skeleton(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []

    def _tag(self, tag, attrs, close=""):
        kept = []
        for k, v in attrs:
            if k in DROP_ATTR:
                continue
            v = v or ""
            if k.startswith("data-") and re.search(r"\s", v):
                v = ""
            kept.append(f' {k}="{html.escape(v, quote=True)}"')
        self.out.append(f"<{tag}{''.join(kept)}{close}>")

    def handle_starttag(self, tag, attrs):
        self._tag(tag, attrs)

    def handle_startendtag(self, tag, attrs):
        self._tag(tag, attrs, "/")

    def handle_endtag(self, tag):
        self.out.append(f"</{tag}>")


def skeleton(fragment):
    """The elements of an HTML fragment without its words (htmlnote/preview.go's skeleton)."""
    p = _Skeleton()
    p.feed(fragment)
    p.close()
    return "".join(p.out)


# ---------- page parts ----------

def head(title, desc, path, image_url, ld, og_type="website", app_arg=None, extra="", image_alt=None):
    app = f'<meta name="apple-itunes-app" content="app-id=6815728446{", app-argument=" + e(app_arg) if app_arg else ""}">'
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{SITE}{path}">
<meta name="theme-color" content="#F4E9DC" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1F1E1D" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="Bookmuse">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:image" content="{SITE}{image_url}">
<meta property="og:image:alt" content="{e(image_alt or title)}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<meta name="twitter:image" content="{SITE}{image_url}">
{app}
<link rel="icon" type="image/png" href="/assets/favicon-2.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon-2.png">
<link rel="stylesheet" href="/site.css?v=6">
{extra}<link rel="stylesheet" href="{CSS}">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
"""


NAV = f"""<body class="bm-cat">
<a class="skip" href="#main">Skip to content</a>
<header class="nav"><div class="wrap nav-in">
  <a class="brand" href="/" aria-label="Bookmuse home"><img src="/assets/icon-2.png" alt="" width="30" height="30">Bookmuse</a>
  <a class="signin" href="/summaries/">Summaries</a>
  <a class="signin lib" href="https://bookmuse-app.wanngo.com/?lang=en">Your library</a>
  <a class="btn" href="{APP_STORE}">Get the app</a>
</div></header>
"""

FOOT = """<footer class="foot"><div class="wrap foot-in">
  <a class="brand" href="/"><img src="/assets/icon-2.png" alt="" width="24" height="24" loading="lazy">Bookmuse</a>
  <nav aria-label="Footer"><a href="/summaries/">Summaries</a><a href="/privacy/">Privacy</a><a href="/delete-account/">Delete account</a><a href="/support/">Support</a></nav>
  <span>© 2026 Bookmuse</span>
  <a class="by" href="https://www.wanngo.com">Made by @wanngo</a>
</div></footer>
"""


def crumbs(items):
    parts = []
    for i, (name, href) in enumerate(items):
        parts.append(f'<a href="{href}">{e(name)}</a>' if href else f'<span aria-current="page">{e(name)}</span>')
    return '<nav class="bm-crumbs" aria-label="Breadcrumb">' + '<i aria-hidden="true">›</i>'.join(parts) + "</nav>"


def crumbs_ld(items, path):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + (h or path)} for i, (n, h) in enumerate(items)]}


def ver(s):
    """?v= for a summary's cover files: /assets/* is cached a week and the names stay the same."""
    return "?v=" + (s.get("sha256") or "0")[:8]


def qv(url):
    """The API's own ?v= of an image (a course cover, an author photo), kept on our copy's link."""
    q = urllib.parse.urlparse(url or "").query
    return "?" + q if q else ""


def cover_card(s, alt=False):
    slug = s["catalog"]
    alt_text = f"{e(short_title(s['title']))} summary cover" if alt else ""
    return (f'<a class="bm-card" href="/summaries/{slug}/"><img src="/assets/summaries/{slug}-s.webp{ver(s)}" alt="{alt_text}" width="220" height="330" loading="lazy" decoding="async">'
            f'<b>{e(short_title(s["title"]))}</b><small>{e(s["author"])}</small></a>')


def row(s, n=None):
    slug = s["catalog"]
    num = f'<span class="bm-n">{n}</span>' if n is not None else ""
    return (f'<li><a href="/summaries/{slug}/">{num}<img src="/assets/summaries/{slug}-s.webp{ver(s)}" alt="" width="220" height="330" loading="lazy" decoding="async">'
            f'<span><b>{e(short_title(s["title"]))}</b><small>{e(s["author"])} · {minutes(s.get("duration_seconds"))} min</small>'
            f'<em>{e(s.get("core_claim"))}</em></span></a></li>')


# ---------- the book page ----------

def meta_description(name, claim, limit=155):
    """"<Title> summary: <core claim>", cut at a word boundary to at most `limit` characters (a "…" only when cut)."""
    text = f"{name} summary: {' '.join((claim or '').split())}".strip()
    if len(text) <= limit:
        return text
    cut = text[:limit - 1].rsplit(" ", 1)[0].rstrip(" ,;:—-")
    return cut + "…"


def book_page(s, d, preview, course=None, part_no=None, author_cards=""):
    slug, title, author = s["catalog"], d["title"], d["author"]
    meta = json.loads(re.search(r'<script type="application/json" id="bookmuse-summary">(.*?)</script>', preview, re.S).group(1))
    style = re.search(r"<style>(.*?)</style>", preview, re.S).group(1)
    tail = preview.split("</main>", 1)[1]
    m = re.search(r"<script>(.*?)</script>", tail, re.S)
    script = m.group(1) if m else ""
    sections = re.findall(r'(<section data-lesson="(\w+)" id="([\w-]+)"( data-locked)?>.*?</section>)', preview, re.S)
    intro = next(x[0] for x in sections if x[1] == "intro")
    free = [x for x in sections if x[1] == "lesson" and not x[3]][:FREE_LESSONS]
    free_ids = {x[2] for x in free}
    # The locked sections stay as element skeletons (each element with its tag, id, classes and short data-* values, no text, no
    # prose attribute, no image), hidden, so the page's script finds what it looks for: the server's own rule (htmlnote/preview.go),
    # applied again here because on its free day the preview file is whole.
    def shell(sec):
        m = re.match(r'<section data-lesson="(\w+)" id="([\w-]+)"( data-locked)?>(.*)</section>$', sec[0], re.S)
        return f'<section data-lesson="{m.group(1)}" id="{m.group(2)}" data-locked hidden>{skeleton(m.group(4))}</section>'
    shells = "".join(shell(x) for x in sections if x[1] != "intro" and x[2] not in free_ids)
    has = {x[1] for x in sections}
    lessons = d.get("lessons") or []

    def lock(mm):
        return mm.group(0) if mm.group(1) in free_ids else '<button class="plain locked" data-go="locked"'
    intro = re.sub(r'<button class="plain" data-go="(\w+)"', lock, intro)
    intro = re.sub(r'<p class="hint" id="intro-hint">.*?</p>', "", intro, flags=re.S)
    intro = re.sub(r'(<img[^>]*id="bookmuse-cover"[^>]*?)src="data:[^"]*"',
                   rf'\1src="/assets/summaries/{slug}.webp{ver(d)}" width="480" height="720"', intro)
    # the main cover is content, not decoration: give it a real alt and drop aria-hidden
    def cover_alt(mm):
        tag = re.sub(r'\s(?:alt|aria-hidden)="[^"]*"', "", mm.group(0))
        return tag.replace("<img", f'<img alt="{e(short_title(title))} by {e(author)} book summary cover"', 1)
    intro = re.sub(r'<img[^>]*id="bookmuse-cover"[^>]*>', cover_alt, intro, count=1)
    n = len(lessons) or len([x for x in sections if x[1] == "lesson"])
    extras = [w for w, k in (("quiz", "quiz"), ("takeaways", "takeaways")) if k in has]
    meta_line = f"{n} lessons · {minutes(d.get('duration_seconds'))} min" + (" · quiz and takeaways" if len(extras) == 2 else "")
    rating = d.get("rating") or {}
    if rating.get("count", 0) >= 5:
        meta_line += f' · ★ {rating["average"]:.1f} ({rating["count"]} ratings)'
    read = f"{READER}/s/{slug}"
    cta = (f'<p class="bm-meta">{e(meta_line)}</p><div class="bm-cta"><a class="p" href="{read}">Read it lesson by lesson</a>'
           f'<a class="s" href="{APP_STORE}">Get the app</a></div>')
    if re.search(r'<p class="byline"[^>]*>.*?</p>', intro, re.S):
        intro = re.sub(r'(<p class="byline"[^>]*>.*?</p>)', lambda mm: mm.group(1) + cta, intro, count=1, flags=re.S)
    else:
        intro = re.sub(r"(</h1>)", lambda mm: mm.group(1) + cta, intro, count=1)

    # Every lesson's title and one-line idea as visible, server-rendered text: the intro's "What you'll learn" list already is
    # that (an <ol class="toc">, locked lessons only dimmed); name it for the book. If a preview lacks it, add a plain list.
    ideas_h = f"All {n} key ideas in {short_title(title)}"
    if '<ol class="toc">' in intro:
        intro = re.sub(r'(<h3 id="intro-learn">)[^<]*(</h3>)', lambda mm: mm.group(1) + e(ideas_h) + mm.group(2), intro, count=1)
    elif lessons:
        items = "".join(f'<li><b>{e(l["title"])}</b>: {e(l.get("line"))}</li>' for l in lessons)
        intro = intro.replace("</section>", f'<h3 id="intro-learn">{e(ideas_h)}</h3><ol class="bm-ideas">{items}</ol></section>', 1) if intro.rstrip().endswith("</section>") else intro

    locked = [l for l in lessons if l["id"] not in free_ids]
    rows = "".join(f'<li><span class="n">{i}</span><span><b>{e(l["title"])}</b><small>{e(l.get("line"))}</small></span></li>'
                   for i, l in ((lessons.index(l) + 1, l) for l in locked))
    if "quiz" in has:
        rows += '<li><span class="n">?</span><span><b>Quiz</b><small>Check you got the big ideas, with the answers explained.</small></span></li>'
    if "takeaways" in has:
        rows += '<li><span class="n">✓</span><span><b>Key takeaways</b><small>Everything worth keeping, on one screen.</small></span></li>'
    more = f"{len(locked)} more lesson{'s' if len(locked) != 1 else ''} in the app" if locked else "The quiz and takeaways are in the app"
    wall = f"""<section class="bm-wall" id="locked" aria-labelledby="locked-h">
  <p class="tag">{more}</p>
  <h2 id="locked-h">Keep going with {e(short_title(title))}</h2>
  <p>The rest of this summary is in Bookmuse for iPhone, iPad and <a href="/#android">Android</a>: one full summary is free every day, and Pro opens them all.</p>
  <ol>{rows}</ol>
  <div class="btns"><a class="p" href="{APP_STORE}">Get the app</a><a class="s" href="{read}">Read in your browser →</a></div>
</section>"""

    similar = [x for x in (d.get("similar") or []) if x.get("catalog") in PUBLISHED][:6]
    more_html = ""
    if similar:
        more_html = (f'<section class="bm-more" aria-labelledby="more-h"><h2 id="more-h">More like this</h2>'
                     f'<div class="bm-grid six">{"".join(cover_card(x, True) for x in similar)}</div></section>')

    cat = (d.get("categories") or ["Self-Growth"])[0]
    path = f"/summaries/{slug}/"
    if course:
        trail = [("Summaries", "/summaries/"), (course["title"], f"/courses/{course['slug']}/"), (f"Part {part_no}", None)]
        page_title = f"{short_title(title)} — {course['title']}, Part {part_no} | Bookmuse"
        course_line = (f'<p class="bm-course">Part {part_no} of {course["parts"]} in the course '
                       f'<a href="/courses/{course["slug"]}/">{e(course["title"])}</a></p>')
    else:
        trail = [("Summaries", "/summaries/"), (cat, f"/categories/{slugify(cat)}/"), (short_title(title), None)]
        page_title = f"{short_title(title)} Summary: {n} Key Ideas from {author} | Bookmuse"
        course_line = ""
    desc = meta_description(short_title(title), d.get("core_claim") or d.get("description") or "")
    src = meta.get("source") or {}
    book = {"@type": "Book", "name": src.get("title") or title,
            "author": [{"@type": "Person", "name": a["name"], "url": f"{SITE}/authors/{a['id']}/"} for a in d.get("authors") or [] if a["id"] != "bookmuse"]}
    book["image"] = f"{SITE}/assets/summaries/{slug}.webp"
    if src.get("year"):
        book["datePublished"] = str(src["year"])
    if rating.get("count", 0) >= 5:
        book["aggregateRating"] = {"@type": "AggregateRating", "ratingValue": round(rating["average"], 1), "ratingCount": rating["count"],
                                   "bestRating": 5, "worstRating": 1}
    article = {"@type": "Article", "@id": SITE + path + "#summary", "headline": f"{short_title(title)} summary",
               "description": desc, "inLanguage": "en", "image": f"{SITE}/assets/summaries/{slug}.webp",
               "datePublished": d.get("published_at"), "author": {"@type": "Organization", "name": "Bookmuse", "url": SITE + "/"},
               "publisher": {"@type": "Organization", "name": "Bookmuse", "logo": {"@type": "ImageObject", "url": f"{SITE}/assets/icon-2.png"}},
               }
    if not course:
        article["about"] = book
    ld = {"@context": "https://schema.org", "@graph": [article, crumbs_ld(trail, path)]}
    page = head(page_title, desc, path, f"/assets/summaries/{slug}.webp", ld, "article", read, extra=f"<style>{style}</style>\n",
                image_alt=f"{short_title(title)} by {author} book summary cover")
    page += NAV + crumbs(trail) + f'\n<main id="main">\n{course_line}{intro}\n' + "\n".join(x[0] for x in free) + f"\n{wall}\n{shells}\n</main>\n"
    page += author_cards + more_html + FOOT + (f"<script>{script}</script>\n" if script else "") + "</body>\n</html>\n"
    return path, page


def author_block(d, authors):
    out = []
    for a in d.get("authors") or []:
        if a["id"] == "bookmuse" or a["id"] not in authors:
            continue
        full = authors[a["id"]]["author"]
        photo = (f'<img src="/assets/authors/{a["id"]}.webp{qv(full.get('photo_url'))}" alt="{e(full['name'])}" width="240" height="240" loading="lazy">'
                 if full.get("photo_url") else f'<span class="bm-initials">{e("".join(w[0] for w in full["name"].split()[:2]))}</span>')
        bio = " ".join(re.split(r"(?<=[.!?])\s+", full.get("bio") or "")[:2])
        credit = f'<i class="bm-credit">{e(full["photo_credit"])}</i>' if full.get("photo_url") and full.get("photo_credit") else ""
        out.append(f'<a class="bm-author" href="/authors/{a["id"]}/">{photo}<span><small>About the author</small><b>{e(full["name"])}</b>'
                   f'<em>{e(full.get("line"))}</em><span>{e(bio)}</span>{credit}</span></a>')
    return f'<section class="bm-authors">{"".join(out)}</section>' if out else ""


# ---------- hub pages ----------

def hub(path, title, desc, h1, lede, body, ld_extra, trail, image_url="/assets/og-3.jpg"):
    ld = {"@context": "https://schema.org", "@graph": [{"@type": "CollectionPage", "@id": SITE + path, "name": html.unescape(h1), "description": desc,
                                                       "isPartOf": {"@id": SITE + "/#website"}, **ld_extra}, crumbs_ld(trail, path)]}
    page = head(title, desc, path, image_url, ld)
    page += NAV + crumbs(trail) + f'\n<main id="main" class="bm-hub wrap">\n<h1>{h1}</h1>\n<p class="lede">{lede}</p>\n{body}\n</main>\n' + FOOT + "</body>\n</html>\n"
    return path, page


def item_list(items):
    return {"mainEntity": {"@type": "ItemList", "numberOfItems": len(items), "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "url": f"{SITE}/summaries/{s['catalog']}/", "name": short_title(s["title"])} for i, s in enumerate(items)]}}


# ---------- main ----------

PUBLISHED = set()
USED_IMAGES = set()


def build():
    state = json.loads(STATE_FILE.read_text()) if STATE_FILE.exists() else {"pages": {}, "pinged": {}, "images": {}}
    state.setdefault("images", {})
    pages, keep = {}, set()

    print("listing summaries…", flush=True)
    summaries, cursor = [], ""
    while True:
        r = api("/v1/summaries?sort=rank&limit=50" + (f"&cursor={urllib.parse.quote(cursor)}" if cursor else ""))
        summaries += r["summaries"]
        cursor = r.get("next_cursor")
        if not cursor:
            break
    summaries = [s for s in summaries if s.get("catalog")]
    before = sum(1 for p in state["pages"] if p.startswith("/summaries/") and p.count("/") == 3)
    if not summaries or (before and len(summaries) < before * 0.8 and "--force" not in sys.argv):
        raise SystemExit(f"only {len(summaries)} summaries from {API} (had {before} pages); not building. --force to build anyway")
    home = api("/v1/summaries/home")
    courses = [api(f"/v1/courses/{c['slug']}") for c in api("/v1/courses")["courses"]]
    collections = []
    for sh in home["shelves"]:
        if sh["kind"] == "collections":
            for c in sh["collections"]:
                collections.append(api(f"/v1/summaries/collections/{c['id']}"))
    categories = [c["name"] for c in api("/v1/summaries/filters")["categories"]]

    parts = []   # (part summary, course, number)
    for c in courses:
        for i, p in enumerate(c["parts"], 1):
            if p.get("catalog"):
                parts.append((p, c["course"], i))
    PUBLISHED.update(s["catalog"] for s in summaries)
    PUBLISHED.update(p["catalog"] for p, _, _ in parts)

    details, previews = {}, {}
    everything = [(s, None, None) for s in summaries] + parts
    for i, (s, c, no) in enumerate(everything, 1):
        slug = s["catalog"]
        print(f"[{i}/{len(everything)}] {slug}", flush=True)
        details[slug] = api(f"/v1/summaries/{urllib.parse.quote(slug)}")
        previews[slug] = get(f"{API}/s/{urllib.parse.quote(slug)}/page?lang=en")
        # the cover is inside the preview page (img#bookmuse-cover, a data URI): no download
        m = re.search(r'<img[^>]*id="bookmuse-cover"[^>]*src="data:image/[a-z]+;base64,([^"]+)"', previews[slug])
        image(f"{s['cover_url']}#{details[slug].get('sha256', '')}", "summary:" + slug,
              [(PUB / f"assets/summaries/{slug}.webp", (480, 720)), (PUB / f"assets/summaries/{slug}-s.webp", (220, 330))], state, keep,
              data=base64.b64decode(m.group(1)) if m else None)

    authors = {}
    for d in details.values():
        for a in d.get("authors") or []:
            if a["id"] != "bookmuse" and a["id"] not in authors:
                authors[a["id"]] = api(f"/v1/authors/{urllib.parse.quote(a['id'])}")
                if authors[a["id"]]["author"].get("photo_url"):
                    image(authors[a["id"]]["author"]["photo_url"], "author:" + a["id"],
                          [(PUB / f"assets/authors/{a['id']}.webp", (240, 240))], state, keep)
    for c in courses:
        cc = c["course"]
        image(cc["cover_url"], "course:" + cc["slug"],
              [(PUB / f"assets/courses/{cc['slug']}.webp", (480, 720)), (PUB / f"assets/courses/{cc['slug']}-s.webp", (220, 330))], state, keep)

    # book pages
    for s, c, no in everything:
        d = details[s["catalog"]]
        path, page = book_page(s, d, previews[s["catalog"]], c, no, author_block(d, authors))
        pages[path] = page

    by_slug = {s["catalog"]: s for s in summaries}
    rank = {s["catalog"]: i for i, s in enumerate(summaries)}

    # categories
    cat_pages = []
    for cat in categories:
        items = [s for s in summaries if cat in (s.get("categories") or [])]
        if not items:
            continue
        cslug = slugify(cat)
        cat_pages.append((cat, cslug, items))
        body = f'<ol class="bm-rows">{"".join(row(s) for s in items)}</ol>'
        others = "".join(f'<a href="/categories/{x[1]}/">{e(x[0])}</a>' for x in [(c, slugify(c), 0) for c in categories] if x[1] != cslug)
        body += f'<h2 class="bm-h2">Other categories</h2><div class="bm-chips">{others}</div>'
        path, page = hub(f"/categories/{cslug}/", f"The Best {cat} Book Summaries ({len(items)}) | Bookmuse",
                         f"{len(items)} {cat.lower()} books as short visual lessons: the core idea of each, diagrams, a quiz and the key takeaways.",
                         f"{e(cat)} book summaries", f"{len(items)} books, most read first. Each one is a short course of visual lessons.",
                         body, item_list(items), [("Summaries", "/summaries/"), (cat, None)])
        pages[path] = page

    # courses
    course_cards = []
    for c in courses:
        cc = c["course"]
        ps = [(p, i) for p, cc2, i in parts if cc2["slug"] == cc["slug"]]
        desc_paras = "".join(f"<p>{e(x)}</p>" for x in (cc.get("description") or "").split("\n") if x.strip())
        rows_html = "".join(row(p, i) for p, i in ps)
        body = (f'<div class="bm-coursehead"><img src="/assets/courses/{cc["slug"]}.webp{qv(cc.get('cover_url'))}" alt="" width="480" height="720">'
                f'<div><p class="bm-kicker">Course · {cc["parts"]} parts · {hm(cc.get("duration_seconds"))} · By Bookmuse</p>{desc_paras}'
                f'<div class="bm-cta"><a class="p" href="{READER}/course/{cc["slug"]}">Open the course</a><a class="s" href="{APP_STORE}">Get the app</a></div></div></div>'
                f'<h2 class="bm-h2">The parts</h2><ol class="bm-rows">{rows_html}</ol>')
        first = (cc.get("description") or "").split("\n")[0]
        ld = {"mainEntity": {"@type": "Course", "name": cc["title"], "description": first,
                             "provider": {"@type": "Organization", "name": "Bookmuse", "url": SITE + "/"},
                             "hasPart": [{"@type": "CreativeWork", "name": p["title"], "url": f"{SITE}/summaries/{p['catalog']}/"} for p, _ in ps]}}
        path, page = hub(f"/courses/{cc['slug']}/", f"{cc['title']}: a Course in {cc['parts']} Short Parts | Bookmuse", first,
                         e(cc["title"]), "", body, ld, [("Summaries", "/summaries/"), (cc["title"], None)], f"/assets/courses/{cc['slug']}.webp")
        pages[path] = page
        course_cards.append(f'<a class="bm-tile" href="/courses/{cc["slug"]}/"><img class="one" src="/assets/courses/{cc["slug"]}-s.webp{qv(cc.get('cover_url'))}" alt="" width="220" height="330" loading="lazy">'
                            f'<span><small>Course · {cc["parts"]} parts · {hm(cc.get("duration_seconds"))}</small><b>{e(cc["title"])}</b><em>{e(first[:110].rsplit(" ", 1)[0] + "…" if len(first) > 110 else first)}</em></span></a>')

    # collections
    coll_cards = []
    for c in collections:
        col, items = c["collection"], [x for x in c["items"] if x.get("catalog") in PUBLISHED]
        if not items:
            continue
        cslug = slugify(col["title"])
        body = f'<ol class="bm-rows">{"".join(row(s) for s in items)}</ol>'
        path, page = hub(f"/collections/{cslug}/", f"{col['title']}: {len(items)} Book Summaries | Bookmuse",
                         f"{col.get('subtitle') or col['title']}: {', '.join(short_title(x['title']) for x in items[:4])} and more, as short visual lessons.",
                         e(col["title"]), e(col.get("subtitle")), body, item_list(items), [("Summaries", "/summaries/"), (col["title"], None)],
                         f"/assets/summaries/{items[0]['catalog']}.webp")
        pages[path] = page
        stack = "".join(f'<img src="/assets/summaries/{x["catalog"]}-s.webp{ver(x)}" alt="" width="220" height="330" loading="lazy">' for x in items[:3])
        coll_cards.append(f'<a class="bm-tile" href="/collections/{cslug}/"><span class="stack">{stack}</span>'
                          f'<span><small>Collection · {len(items)} summaries</small><b>{e(col["title"])}</b><em>{e(col.get("subtitle"))}</em></span></a>')

    # authors
    for aid, a in authors.items():
        au = a["author"]
        items = [x for x in a.get("summaries") or [] if x.get("catalog") in by_slug]
        if not items:
            continue
        years = ""
        if au.get("born"):
            years = f'{au["born"]}–{au["died"]}' if au.get("died") else f'Born {au["born"]}'
        credit = ""
        if au.get("photo_credit"):
            credit = (f'<a href="{e(au["photo_credit_url"])}" rel="nofollow">{e(au["photo_credit"])}</a>' if au.get("photo_credit_url") else e(au["photo_credit"]))
            credit = f'<small class="bm-credit">{credit}</small>'
        photo = (f'<figure class="bm-photo"><img src="/assets/authors/{aid}.webp{qv(au.get('photo_url'))}" alt="{e(au["name"])}" width="240" height="240">{credit}</figure>'
                 if au.get("photo_url") else f'<span class="bm-initials big">{e("".join(w[0] for w in au["name"].split()[:2]))}</span>')
        site = f'<p><a href="{e(au["website"])}" rel="nofollow">{e(urllib.parse.urlparse(au["website"]).netloc or au["website"])}</a></p>' if au.get("website") else ""
        body = (f'<div class="bm-authorhead">{photo}<div><p class="bm-kicker">{e(au.get("line"))}{" · " + years if years else ""}</p>'
                f'<p>{e(au.get("bio"))}</p>{site}</div></div>'
                f'<h2 class="bm-h2">Summaries of {e(au["name"])}\'s books</h2><ol class="bm-rows">{"".join(row(s) for s in items)}</ol>')
        person = {"@type": "Person", "name": au["name"], "description": au.get("line")}
        if au.get("website"):
            person["sameAs"] = [au["website"]]
        if au.get("photo_url"):
            person["image"] = f"{SITE}/assets/authors/{aid}.webp"
        path, page = hub(f"/authors/{aid}/", f"{au['name']}: Book Summaries and Key Ideas | Bookmuse",
                         f"{au['name']}, {au.get('line') or ''}. Summaries of {', '.join(short_title(x['title']) for x in items[:3])} as short visual lessons.",
                         e(au["name"]), "", body, {"mainEntity": person}, [("Summaries", "/summaries/"), (au["name"], None)],
                         f"/assets/authors/{aid}.webp" if au.get("photo_url") else "/assets/og-3.jpg")
        pages[path] = page

    # all summaries
    chips = "".join(f'<a href="/categories/{c[1]}/">{e(c[0])} <i>{len(c[2])}</i></a>' for c in cat_pages)
    body = f'<div class="bm-chips">{chips}</div>'
    if course_cards or coll_cards:
        body += f'<h2 class="bm-h2">Courses and collections</h2><div class="bm-tiles">{"".join(course_cards + coll_cards)}</div>'
    seen = set()
    for cat, cslug, items in cat_pages:
        mine = [s for s in items if s["catalog"] not in seen]
        if not mine:
            continue
        seen.update(s["catalog"] for s in mine)
        body += (f'<section class="bm-catsec"><div class="bm-sechead"><h2 class="bm-h2">{e(cat)}</h2><a href="/categories/{cslug}/">All {len(items)} →</a></div>'
                 f'<div class="bm-grid">{"".join(cover_card(s) for s in mine)}</div></section>')
    path, page = hub("/summaries/", f"Book Summaries: {len(summaries)} Great Books as Visual Lessons | Bookmuse",
                     f"Every Bookmuse summary: {len(summaries)} non-fiction books as short, visual lessons with diagrams, guess-first questions, a quiz and the key takeaways.",
                     "All book summaries", f"{len(summaries)} great books, each a short course of visual lessons"
                     + (f", plus {len(courses)} course{'s' if len(courses) != 1 else ''} of {len(parts)} parts" if parts else "") + ". New books every week.",
                     body, item_list(summaries), [("Summaries", None)])
    pages[path] = page

    # write pages; remove what is no longer published
    for d in MANAGED_DIRS:
        base = PUB / d
        if base.exists():
            for f in base.rglob("index.html"):
                rel = "/" + f.parent.relative_to(PUB).as_posix() + "/"
                if rel not in pages:
                    f.unlink()
            for sub in sorted(base.rglob("*"), reverse=True):
                if sub.is_dir() and not any(sub.iterdir()):
                    sub.rmdir()
            for sub in base.iterdir():
                if sub.is_dir() and not (sub / "index.html").exists() and ("/" + sub.relative_to(PUB).as_posix() + "/") not in pages:
                    shutil.rmtree(sub)
    for a in MANAGED_ASSETS:
        base = PUB / a
        if base.exists():
            for f in base.iterdir():
                if f.relative_to(PUB).as_posix() not in keep:
                    f.unlink()
    today = datetime.date.today().isoformat()
    new_state_pages = {}
    for path, page in pages.items():
        out = PUB / path.strip("/") / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page)
        h = stable_hash(path, page)
        old = state["pages"].get(path)
        new_state_pages[path] = [h, old[1] if old and old[0] == h else today]
    state["pages"] = new_state_pages
    state["images"] = {k: v for k, v in state["images"].items() if k in USED_IMAGES}

    home_page(summaries, cat_pages, course_cards, coll_cards)
    sitemap(state)
    llms(summaries, details, courses, parts)
    STATE_FILE.write_text(json.dumps(state, indent=1, sort_keys=True) + "\n")
    print(f"{len(pages)} pages: {len(everything)} book pages, {len(cat_pages)} categories, {len(courses)} courses, "
          f"{len(coll_cards)} collections, {len([p for p in pages if p.startswith('/authors/')])} authors")


def stable_hash(path, page):
    if path.startswith("/summaries/") and path.count("/") == 3:
        key = page[page.index('<main id="main">'):page.index("</main>")]
    else:
        key = re.search(r"<h1>.*?</h1>", page, re.S).group(0) + "|".join(sorted(set(re.findall(r'href="(/[^"]*)"', page))))
        key += re.search(r'<p class="lede">.*?</p>', page, re.S).group(0)
    return hashlib.sha256(key.encode()).hexdigest()[:16]


def replace_between(path, start, end, content):
    s = path.read_text()
    a, b = s.index(start) + len(start), s.index(end)
    path.write_text(s[:a] + content + s[b:])


def home_page(summaries, cat_pages, course_cards, coll_cards):
    top = summaries[:WALL_COVERS]
    half = (len(top) + 1) // 2

    def items(r, hidden):
        return "".join(
            f'<li><a href="/summaries/{s["catalog"]}/"{" tabindex=\"-1\"" if hidden else ""}><img src="/assets/summaries/{s["catalog"]}-s.webp{ver(s)}" '
            f'alt="{"" if hidden else e(short_title(s["title"]))}" width="220" height="330" loading="lazy" decoding="async"></a></li>' for s in r)
    wall = "".join(f'        <div class="row r{i + 1}"><ul class="track">{items(r, False)}</ul><ul class="track" aria-hidden="true">{items(r, True)}</ul></div>\n'
                   for i, r in enumerate([top[:half], top[half:]]) if r)
    idx = PUB / "index.html"
    replace_between(idx, "<!--covers-->\n", "<!--/covers-->", wall)
    chips = "".join(f'<a href="/categories/{c[1]}/">{e(c[0])}</a>' for c in cat_pages)
    browse = (f'\n      <div class="wrap browse">\n        <div class="bm-chips">{chips}</div>\n'
              f'        <div class="bm-tiles">{"".join((course_cards + coll_cards)[:3])}</div>\n'
              f'        <a class="btn all" href="/summaries/">Browse all summaries →</a>\n      </div>\n      ')
    replace_between(idx, "<!--browse-->", "<!--/browse-->", browse)


def sitemap(state):
    base = [("/", None), ("/support/", None), ("/privacy/", None), ("/delete-account/", None)]
    old = (PUB / "sitemap.xml").read_text()
    fixed = {m.group(1): m.group(2) for m in re.finditer(r"<loc>https://bookmuse\.wanngo\.com(/[^<]*)</loc><lastmod>([^<]+)</lastmod>", old)}
    lines = [f"  <url><loc>{SITE}{p}</loc><lastmod>{fixed.get(p, datetime.date.today().isoformat())}</lastmod></url>" for p, _ in base]
    for p in sorted(state["pages"], key=lambda x: (x.count("/"), x)):
        lines.append(f"  <url><loc>{SITE}{p}</loc><lastmod>{state['pages'][p][1]}</lastmod></url>")
    (PUB / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                                     + "\n".join(lines) + "\n</urlset>\n")


def llms(summaries, details, courses, parts):
    lst = ["## Summaries", "", f"Each summary has a public page with its free part (the intro and the first three lessons) at {SITE}/summaries/<slug>/. All of them: {SITE}/summaries/", ""]
    for s in summaries:
        lst.append(f"- [{short_title(s['title'])}]({SITE}/summaries/{s['catalog']}/) by {s['author']}: {s.get('core_claim') or ''}")
    if courses:
        lst += ["", "## Courses", ""]
        for c in courses:
            cc = c["course"]
            lst.append(f"- [{cc['title']}]({SITE}/courses/{cc['slug']}/): {cc['parts']} parts. {(cc.get('description') or '').splitlines()[0]}")
    replace_between(PUB / "llms.txt", "<!-- catalog -->\n", "<!-- /catalog -->", "\n".join(lst) + "\n")
    full = [(PUB / "llms.txt").read_text().split("<!-- catalog -->")[0].rstrip(), "", "## Every summary in full detail", ""]
    for s in summaries + [p for p, _, _ in parts]:
        d = details[s["catalog"]]
        full += [f"### {short_title(d['title'])} — {d['author']}", f"Page: {SITE}/summaries/{s['catalog']}/", f"Core idea: {d.get('core_claim') or ''}",
                 f"About the book: {d.get('description') or ''}", f"Categories: {', '.join(d.get('categories') or [])}",
                 f"Length: {len(d.get('lessons') or [])} lessons, {minutes(d.get('duration_seconds'))} min", "Lessons:"]
        full += [f"{i}. {l['title']}: {l.get('line') or ''}" for i, l in enumerate(d.get("lessons") or [], 1)]
        full.append("")
    (PUB / "llms-full.txt").write_text("\n".join(full))


def ping():
    state = json.loads(STATE_FILE.read_text())
    key = next(p.stem for p in PUB.glob("*.txt") if re.fullmatch(r"[0-9a-f]{32}", p.stem))
    pages, pinged = state["pages"], state.get("pinged", {})
    urls = [SITE + p for p, v in pages.items() if pinged.get(p) != v[0]] + [SITE + p for p in pinged if p not in pages]
    if not urls:
        print("IndexNow: nothing changed")
        return
    for i in range(0, len(urls), 10000):
        body = json.dumps({"host": HOST, "key": key, "keyLocation": f"{SITE}/{key}.txt", "urlList": urls[i:i + 10000]}).encode()
        req = urllib.request.Request("https://api.indexnow.org/IndexNow", data=body, headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "bookmuse-pages/1"})
        with urllib.request.urlopen(req, timeout=60) as r:
            print(f"IndexNow: {len(urls[i:i + 10000])} urls, HTTP {r.status}")
    state["pinged"] = {p: v[0] for p, v in pages.items()}
    STATE_FILE.write_text(json.dumps(state, indent=1, sort_keys=True) + "\n")


if __name__ == "__main__":
    ping() if "--ping" in sys.argv else build()
