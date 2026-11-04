"""Builds the Rive scene for wanngo.com from the bedroom mockup.

    python3 build_scene.py [--backdrop] OUT.rml

scene.svg is the mockup's scene markup (day/night blocks as <g id="day">/<g id="night">).
Static art is converted shape for shape; elements with an animation class get a pivot
node and a timeline; the person's day and the cat are rigged here. --backdrop adds the
wall and floor the page draws in HTML, for headless screenshots only.
"""
import math
import os
import re
import sys
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
FPS = 60

INK = "2E2A26"
GINGER = "F4BE8A"
STRIPE = "D9935A"
PINK = "F4A9B8"
CREAM = "FFF3E2"

_ids = iter(range(100, 1_000_000))


def nid():
    return f"0:{next(_ids)}"


def f(v):
    s = f"{v:.4f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def argb(hex6, alpha=1.0):
    hex6 = hex6.lstrip("#").upper()
    if len(hex6) == 3:
        hex6 = "".join(c * 2 for c in hex6)
    return f"{max(0, min(255, round(alpha * 255))):02X}{hex6}"


NAMED = {"white": "FFFFFF", "none": None}


def color(v):
    if v is None:
        return None
    v = v.strip()
    if v in NAMED:
        return NAMED[v]
    if v.startswith("#"):
        return v[1:]
    return v  # url(#...) handled by caller


# ------------------------------------------------------------------ easing
def bezier(x1, y1, x2, y2):
    def sample(a, b, t):
        return 3 * a * (1 - t) ** 2 * t + 3 * b * (1 - t) * t * t + t**3

    def ease(p):
        lo, hi = 0.0, 1.0
        for _ in range(40):
            mid = (lo + hi) / 2
            if sample(x1, x2, mid) < p:
                lo = mid
            else:
                hi = mid
        return sample(y1, y2, (lo + hi) / 2)

    return ease


EASES = {
    "linear": (0, 0, 1, 1),
    "ease": (0.25, 0.1, 0.25, 1),
    "ease-in-out": (0.42, 0, 0.58, 1),
    "ease-out": (0, 0, 0.58, 1),
    "ease-in": (0.42, 0, 1, 1),
}


def kf(frame, value, interp="linear", kind="Double"):
    if isinstance(interp, tuple):
        x1, y1, x2, y2 = interp
        return (
            f'<KeyFrame{kind} frame="{frame}" value="{f(value)}" interpolationType="cubic">'
            f'<CubicEaseInterpolator x1="{f(x1)}" y1="{f(y1)}" x2="{f(x2)}" y2="{f(y2)}"/></KeyFrame{kind}>'
        )
    return f'<KeyFrame{kind} frame="{frame}" value="{f(value)}" interpolationType="{interp}"/>'


def css_keys(stops, ease, n, phase=0.0):
    """CSS @keyframes -> Rive keys over n frames. stops: [(fraction, value)]; ease applies per segment.
    phase: fraction of the cycle already played at t=0 (a negative animation-delay)."""
    stops = sorted(stops)
    if stops[0][0] > 0:
        stops.insert(0, (0.0, stops[0][1]))
    if stops[-1][0] < 1:
        stops.append((1.0, stops[-1][1]))
    curve = EASES[ease]
    if not phase:
        out = []
        for i, (p, v) in enumerate(stops):
            fr = round(p * n)
            nxt = stops[i + 1][1] if i + 1 < len(stops) else None
            if nxt is None:
                out.append(kf(fr, v))
            elif nxt == v:
                out.append(kf(fr, v, "hold"))
            else:
                out.append(kf(fr, v, curve if ease != "linear" else "linear"))
        return out
    ez = bezier(*curve)

    def at(p):
        for (p0, v0), (p1, v1) in zip(stops, stops[1:]):
            if p0 <= p <= p1:
                if p1 == p0:
                    return v1
                return v0 + (v1 - v0) * ez((p - p0) / (p1 - p0))
        return stops[-1][1]

    frames = set(range(0, n + 1, 4)) | {n}
    wrap = round((1 - phase) * n) % n
    if wrap:
        frames |= {wrap - 1, wrap}
    for p, _ in stops:
        frames.add(round(((p - phase) % 1) * n))
    out = []
    for fr in sorted(x for x in frames if 0 <= x <= n):
        p = (fr / n + phase) % 1
        if wrap and fr == wrap - 1:
            p = 1.0 - 1e-9
        out.append(kf(fr, at(p)))
    return out


def wave_keys(base, amp, n, lag=0.0, step=6):
    """A sine wave around base, one cycle over n frames, sampled; lag in radians."""
    out = []
    for fr in list(range(0, n, step)) + [n]:
        out.append(kf(fr, base + amp * math.sin(2 * math.pi * fr / n - lag)))
    return out


# ------------------------------------------------------------------ animations
class Anim:
    def __init__(self, name, frames, loop="loop"):
        self.name, self.frames, self.loop, self.id = name, frames, loop, nid()
        self.keyed = []  # (objectId, property, [keys])
        self.prelude = ""

    def key(self, obj, prop, keys):
        self.keyed.append((obj, prop, keys))

    def rml(self):
        body = []
        for obj, prop, keys in self.keyed:
            attr = f'propertyKey="{prop}"' if isinstance(prop, int) else f'property="{prop}"'
            body.append(f'            <KeyedObject objectId="{obj}">\n                <KeyedProperty {attr}>')
            body += [f"                    {k}" for k in keys]
            body.append("                </KeyedProperty>\n            </KeyedObject>")
        return (
            f'        <LinearAnimation loopValue="{self.loop}" duration="{self.frames}" name="{self.name}" id="{self.id}">\n'
            + "\n".join(body)
            + "\n        </LinearAnimation>"
        )


ANIMS = {}


def anim(name, seconds=None, frames=None, loop="loop"):
    if name not in ANIMS:
        ANIMS[name] = Anim(name, frames if frames else round(seconds * FPS), loop)
    return ANIMS[name]


# ------------------------------------------------------------------ SVG paths
def parse_path(d):
    toks = re.findall(r"[MLHVCQZmlhvcqz]|-?\d*\.?\d+(?:e-?\d+)?", d)
    i, contours, cur, pos, start, cmd = 0, [], None, (0.0, 0.0), (0.0, 0.0), None

    def num():
        nonlocal i
        i += 1
        return float(toks[i - 1])

    while i < len(toks):
        t = toks[i]
        if re.match(r"[A-Za-z]", t):
            cmd = t
            i += 1
            if cmd in "Zz":
                cur["closed"] = True
                pos = start
                continue
        if cmd == "M":
            pos = start = (num(), num())
            cur = {"start": pos, "segs": [], "closed": False}
            contours.append(cur)
            cmd = "L"
        elif cmd == "L":
            pos = (num(), num())
            cur["segs"].append(("L", pos))
        elif cmd == "H":
            pos = (num(), pos[1])
            cur["segs"].append(("L", pos))
        elif cmd == "V":
            pos = (pos[0], num())
            cur["segs"].append(("L", pos))
        elif cmd == "C":
            c1, c2, p = (num(), num()), (num(), num()), (num(), num())
            cur["segs"].append(("C", c1, c2, p))
            pos = p
        elif cmd == "Q":
            q, p = (num(), num()), (num(), num())
            c1 = (pos[0] + 2 / 3 * (q[0] - pos[0]), pos[1] + 2 / 3 * (q[1] - pos[1]))
            c2 = (p[0] + 2 / 3 * (q[0] - p[0]), p[1] + 2 / 3 * (q[1] - p[1]))
            cur["segs"].append(("C", c1, c2, p))
            pos = p
        else:
            raise ValueError(f"unsupported path command {cmd!r} in {d}")
    return contours


def polar(frm, to):
    return math.atan2(to[1] - frm[1], to[0] - frm[0]), math.hypot(to[0] - frm[0], to[1] - frm[1])


def contour_rml(c, ind, dx=0.0, dy=0.0):
    pts = [c["start"]] + [s[-1] for s in c["segs"]]
    n = len(pts)
    ins, outs = [None] * n, [None] * n
    for k, s in enumerate(c["segs"]):
        if s[0] == "C":
            outs[k], ins[k + 1] = s[1], s[2]
    closed = c["closed"]
    if closed and n > 1 and math.dist(pts[0], pts[-1]) < 1e-6:
        ins[0] = ins[-1]
        pts, ins, outs = pts[:-1], ins[:-1], outs[:-1]
        n -= 1
    area = sum(pts[k][0] * pts[(k + 1) % n][1] - pts[(k + 1) % n][0] * pts[k][1] for k in range(n))
    lines = [f'{ind}<PointsPath isClosed="{str(closed).lower()}" isClockwise="{str(area >= 0).lower()}" name="Path">']
    for k, p in enumerate(pts):
        x, y = p[0] + dx, p[1] + dy
        if ins[k] is None and outs[k] is None:
            lines.append(f'{ind}    <StraightVertex x="{f(x)}" y="{f(y)}"/>')
            continue
        ir, idist = polar(p, ins[k]) if ins[k] else (0.0, 0.0)
        orr, odist = polar(p, outs[k]) if outs[k] else (0.0, 0.0)
        lines.append(
            f'{ind}    <CubicDetachedVertex x="{f(x)}" y="{f(y)}" inRotation="{f(ir)}" inDistance="{f(idist)}" '
            f'outRotation="{f(orr)}" outDistance="{f(odist)}"/>'
        )
    lines.append(f"{ind}</PointsPath>")
    return "\n".join(lines)


def bezier_pts(p0, c1, c2, p3, n=24):
    for k in range(n + 1):
        t = k / n
        mt = 1 - t
        yield (
            mt**3 * p0[0] + 3 * mt * mt * t * c1[0] + 3 * mt * t * t * c2[0] + t**3 * p3[0],
            mt**3 * p0[1] + 3 * mt * mt * t * c1[1] + 3 * mt * t * t * c2[1] + t**3 * p3[1],
        )


def path_points(d):
    for c in parse_path(d):
        p0 = c["start"]
        yield p0
        for s in c["segs"]:
            if s[0] == "L":
                p0 = s[1]
                yield p0
            else:
                yield from bezier_pts(p0, s[1], s[2], s[3])
                p0 = s[3]


# ------------------------------------------------------------------ geometry of SVG elements
def num(el, k, default=0.0):
    v = el.get(k)
    return float(v) if v is not None else default


def parse_transform(t):
    """[(kind, args)] for translate(...) and rotate(...)."""
    out = []
    for kind, args in re.findall(r"(translate|rotate)\(([^)]*)\)", t or ""):
        out.append((kind, [float(a) for a in re.split(r"[ ,]+", args.strip())]))
    return out


def apply_tf(pts, tfs):
    for kind, a in reversed(tfs):
        if kind == "translate":
            pts = [(x + a[0], y + (a[1] if len(a) > 1 else 0)) for x, y in pts]
        else:
            ang = math.radians(a[0])
            cx, cy = (a[1], a[2]) if len(a) == 3 else (0, 0)
            ca, sa = math.cos(ang), math.sin(ang)
            pts = [(cx + (x - cx) * ca - (y - cy) * sa, cy + (x - cx) * sa + (y - cy) * ca) for x, y in pts]
    return pts


def el_points(el):
    tag = el.tag
    if tag == "path":
        pts = list(path_points(el.get("d")))
    elif tag == "rect":
        x, y, w, h = num(el, "x"), num(el, "y"), num(el, "width"), num(el, "height")
        pts = [(x, y), (x + w, y + h)]
    elif tag == "circle":
        cx, cy, r = num(el, "cx"), num(el, "cy"), num(el, "r")
        pts = [(cx - r, cy - r), (cx + r, cy + r)]
    elif tag == "ellipse":
        cx, cy, rx, ry = num(el, "cx"), num(el, "cy"), num(el, "rx"), num(el, "ry")
        pts = [(cx - rx, cy - ry), (cx + rx, cy + ry)]
    elif tag == "text":
        x, y, s = num(el, "x"), num(el, "y"), num(el, "font-size", 16)
        pts = [(x, y - 0.6 * s), (x + 0.5 * s, y)]
    elif tag == "g":
        pts = [p for c in el for p in el_points(c)]
    else:
        pts = []
    return apply_tf(pts, parse_transform(el.get("transform")))


def bbox(el):
    pts = el_points(el)
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    return min(xs), min(ys), max(xs), max(ys)


# ------------------------------------------------------------------ paints
def solid(c):
    return f'<SolidColor colorValue="{c}" name="Color"/>'


def fill_rml(c, ind):
    return f'{ind}<Fill name="Fill">\n{ind}    {solid(c)}\n{ind}</Fill>'


def stroke_rml(c, w, ind, cap="round", join="round", dash=None):
    extra = ""
    if dash:
        extra = f"\n{ind}    <DashPath name=\"Dashes\">" + "".join(
            f'\n{ind}        <Dash length="{f(d)}" name="{"On" if i % 2 == 0 else "Off"}"/>' for i, d in enumerate(dash)
        ) + f"\n{ind}    </DashPath>"
    return f'{ind}<Stroke thickness="{f(w)}" cap="{cap}" join="{join}" name="Stroke">\n{ind}    {solid(c)}{extra}\n{ind}</Stroke>'


def gradient_rml(grad, box, ind):
    x0, y0, x1, y1 = box
    sx, sy = x0 + grad["x1"] * (x1 - x0), y0 + grad["y1"] * (y1 - y0)
    ex, ey = x0 + grad["x2"] * (x1 - x0), y0 + grad["y2"] * (y1 - y0)
    stops = "".join(f'\n{ind}        <GradientStop colorValue="{argb(c)}" position="{f(p)}"/>' for p, c in grad["stops"])
    return (
        f'{ind}<Fill name="Fill">\n{ind}    <LinearGradient startX="{f(sx)}" startY="{f(sy)}" endX="{f(ex)}" endY="{f(ey)}" name="Gradient">'
        f"{stops}\n{ind}    </LinearGradient>\n{ind}</Fill>"
    )


# ------------------------------------------------------------------ the converter
PATTERN_BASE = {"quilt": "CFE0F5", "rugP": "F3C9CF"}
INHERIT = ("fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "fill-opacity", "stroke-opacity")


class Ctx:
    def __init__(self, style, clip=None):
        self.style, self.clip = style, clip

    def child(self, el, clip=None):
        s = dict(self.style)
        for k in INHERIT:
            if el.get(k) is not None:
                s[k] = el.get(k)
        return Ctx(s, clip or self.clip)


class Converter:
    def __init__(self, root):
        self.defs = {}
        self.gradients = {}
        self.clips = {}  # clip id -> shape id of the clip source
        self.extra_roots = []  # shapes emitted at artboard level (clip sources)
        self.by_class = {}  # class -> [node ids]
        self.hooks = {}  # svg id/class hooks -> callable(el, ctx, ind) returning rml
        for g in root.iter("linearGradient"):
            self.gradients[g.get("id")] = {
                "x1": num(g, "x1"), "y1": num(g, "y1"), "x2": num(g, "x2", 1), "y2": num(g, "y2"),
                "stops": [(float(s.get("offset")), s.get("stop-color")) for s in g.iter("stop")],
            }

    def register(self, cls, sid):
        self.by_class.setdefault(cls, []).append(sid)

    # ---- leaves
    def geometry(self, el, ind):
        tag = el.tag
        if tag == "path":
            return [contour_rml(c, ind) for c in parse_path(el.get("d"))]
        if tag == "rect":
            x, y, w, h, rx = num(el, "x"), num(el, "y"), num(el, "width"), num(el, "height"), num(el, "rx")
            return [f'{ind}<Rectangle x="{f(x)}" y="{f(y)}" width="{f(w)}" height="{f(h)}" cornerRadiusTL="{f(rx)}" originX="0" originY="0" name="Path"/>']
        if tag == "circle":
            cx, cy, r = num(el, "cx"), num(el, "cy"), num(el, "r")
            return [f'{ind}<Ellipse x="{f(cx)}" y="{f(cy)}" width="{f(2 * r)}" height="{f(2 * r)}" name="Path"/>']
        if tag == "ellipse":
            cx, cy, rx, ry = num(el, "cx"), num(el, "cy"), num(el, "rx"), num(el, "ry")
            return [f'{ind}<Ellipse x="{f(cx)}" y="{f(cy)}" width="{f(2 * rx)}" height="{f(2 * ry)}" name="Path"/>']
        raise ValueError(tag)

    def shape(self, el, ctx, ind, name=None, paint="both", sid=None):
        s = ctx.style
        fill = color(s.get("fill"))
        stroke = color(s.get("stroke"))
        sw = float(s.get("stroke-width", 1))
        fo = float(s.get("fill-opacity", 1))
        so = float(s.get("stroke-opacity", 1))
        dash = [float(v) for v in el.get("stroke-dasharray").split()] if el.get("stroke-dasharray") else None
        body = self.geometry(el, ind + "    ")
        if fill and paint in ("both", "fill", "base"):
            if fill.startswith("url("):
                gid = fill[5:-1]
                if gid in self.gradients:
                    body.append(gradient_rml(self.gradients[gid], bbox(el), ind + "    "))
                elif gid in PATTERN_BASE:
                    body.append(fill_rml(argb(PATTERN_BASE[gid], fo), ind + "    "))
            else:
                body.append(fill_rml(argb(fill, fo), ind + "    "))
        if stroke and paint in ("both", "stroke"):
            body.append(stroke_rml(argb(stroke, so), sw, ind + "    ", s.get("stroke-linecap", "butt"), s.get("stroke-linejoin", "miter"), dash))
        if ctx.clip:
            body.append(f'{ind}    <ClippingShape sourceId="{ctx.clip}" name="Clip"/>')
        idattr = f' id="{sid}"' if sid else ""
        nm = name or el.get("data-name") or el.tag.capitalize()
        return f'{ind}<Shape name="{nm}"{idattr}>\n' + "\n".join(body) + f"\n{ind}</Shape>"

    def pattern_shape(self, el, ctx, ind, pattern):
        """SVG pattern fill -> base fill, a clipped overlay of the motif, then the outline on top."""
        x0, y0, x1, y1 = bbox(el)
        base_id = nid()
        base = self.shape(el, ctx, ind, name="Base", paint="base", sid=base_id)
        geo = []
        if pattern == "quilt":
            base = base.replace('<Fill name="Fill">', '<Fill name="Fill">', 1)
            tx0, ty0 = math.floor(x0 / 22) * 22, math.floor(y0 / 22) * 22
            yy = ty0
            while yy < y1:
                xx = tx0
                while xx < x1:
                    for ox, oy in ((6, 6), (17, 17)):
                        geo.append(f'{ind}    <Ellipse x="{f(xx + ox)}" y="{f(yy + oy)}" width="4.4" height="4.4" name="Dot"/>')
                    xx += 22
                yy += 22
            overlay = f'{ind}<Shape name="Quilt Dots">\n' + "\n".join(geo) + "\n" + fill_rml(argb("FFFDF8"), ind + "    ")
        else:  # rug zigzags
            yy = math.floor(y0 / 14) * 14
            while yy < y1:
                pts = []
                xx = math.floor(x0 / 28) * 28
                while xx <= x1 + 28:
                    pts += [(xx, yy + 7), (xx + 7, yy + 2), (xx + 14, yy + 7), (xx + 21, yy + 2)]
                    xx += 28
                geo.append(contour_rml({"start": pts[0], "segs": [("L", p) for p in pts[1:]], "closed": False}, ind + "    "))
                yy += 14
            overlay = f'{ind}<Shape name="Rug Zigzag">\n' + "\n".join(geo) + "\n" + stroke_rml(argb("FFFDF8"), 2, ind + "    ")
        overlay += f'\n{ind}    <ClippingShape sourceId="{base_id}" name="Clip"/>\n{ind}</Shape>'
        parts = []
        s = ctx.style
        if color(s.get("stroke")):
            parts.append(self.shape(el, ctx, ind, name="Outline", paint="stroke"))
        parts += [overlay, base]
        return parts

    # ---- tree
    def convert(self, el, ctx, ind):
        """RML for one SVG element (a list of sibling strings, front first)."""
        tag = el.tag
        if tag in ("defs", "linearGradient", "clipPath", "pattern", "stop"):
            return []
        cls = (el.get("class") or "").split()
        hook = self.hooks.get(el.get("id")) or next((self.hooks[c] for c in cls if c in self.hooks), None)
        if hook:
            return hook(self, el, ctx, ind)
        if tag == "text":
            return []  # lettering lives in the HTML layer or is drawn by hooks
        cctx = ctx.child(el)
        if el.get("clip-path"):
            cid = el.get("clip-path")[5:-1]
            cctx = Ctx(cctx.style, self.clip_source(cid))
        tfs = parse_transform(el.get("transform"))
        if tag == "g":
            kids = []
            for c in el:
                kids = self.convert(c, cctx, ind + "    " * (1 + len(tfs))) + kids
            inner = kids
        else:
            fill = color(cctx.style.get("fill"))
            if fill and fill.startswith("url(#") and fill[5:-1] in ("quilt", "rugP"):
                inner = self.pattern_shape(el, cctx, ind + "    " * len(tfs), "quilt" if fill[5:-1] == "quilt" else "rug")
            else:
                inner = [self.shape(el, cctx, ind + "    " * len(tfs))]
        out = inner
        depth = len(tfs)
        for kind, a in reversed(tfs):
            depth -= 1
            pad = ind + "    " * depth
            if kind == "translate":
                out = [f'{pad}<Node x="{f(a[0])}" y="{f(a[1] if len(a) > 1 else 0)}" name="Group">\n' + "\n".join(out) + f"\n{pad}</Node>"]
            else:
                cx, cy = (a[1], a[2]) if len(a) == 3 else (0, 0)
                rid = nid()
                for c in cls:
                    self.register(c + ":rotate", rid)
                out = [
                    f'{pad}<Node x="{f(cx)}" y="{f(cy)}" rotation="{f(math.radians(a[0]))}" name="Rotate" id="{rid}">\n'
                    f'{pad}    <Node x="{f(-cx)}" y="{f(-cy)}" name="Offset">\n'
                    + "\n".join(o.replace("\n", "\n        ") if False else o for o in out)
                    + f"\n{pad}    </Node>\n{pad}</Node>"
                ]
        if tag == "g" and not tfs:
            nm = el.get("id") or (cls[0] if cls else "Group")
            out = [f'{ind}<Node name="{nm}"{self._gid(el)}>\n' + "\n".join(out) + f"\n{ind}</Node>"]
        anim_cls = [c for c in cls if c in ANIM_CLASSES]
        if anim_cls:
            out = [self.pivot(el, anim_cls, out, ind)]
        return out

    def _gid(self, el):
        if el.get("id") in ("day", "night"):
            sid = nid()
            self.register(el.get("id"), sid)
            return f' id="{sid}"'
        return ""

    def clip_source(self, cid):
        if cid not in self.clips:
            sid = nid()
            r = ROOT.find(f".//clipPath[@id='{cid}']/rect")
            ctx = Ctx({"fill": "none"})
            self.extra_roots.append(self.shape(r, ctx, "        ", name="Window Clip", sid=sid))
            self.clips[cid] = sid
        return self.clips[cid]

    def pivot(self, el, classes, inner, ind):
        x0, y0, x1, y1 = bbox(el)
        origin = {
            "center": ((x0 + x1) / 2, (y0 + y1) / 2),
            "top": ((x0 + x1) / 2, y0),
            "bottom": ((x0 + x1) / 2, y1),
            "spin": (952, 224),
            "none": (0, 0),
        }[ANIM_CLASSES[classes[0]]["origin"]]
        sid = nid()
        delay = 0.0
        m = re.search(r"animation-delay:\s*(-?[\d.]+)s", el.get("style") or "")
        if m:
            delay = -float(m.group(1))
        for c in classes:
            self.register(c, sid)
            spec = ANIM_CLASSES[c]
            if spec.get("keys"):
                spec["keys"](sid, origin, delay)
        body = "\n".join(inner)
        return (
            f'{ind}<Node x="{f(origin[0])}" y="{f(origin[1])}" name="{classes[0]}" id="{sid}">\n'
            f'{ind}    <Node x="{f(-origin[0])}" y="{f(-origin[1])}" name="Offset">\n{body}\n{ind}    </Node>\n{ind}</Node>'
        )


# ------------------------------------------------------------------ CSS animations from the mockup
def loop_anim(name, seconds, prop, stops, ease, origin_add=0.0):
    def keys(sid, origin, delay):
        period = seconds
        a = anim(f"{name}" if not delay else f"{name}", seconds)
        add = origin[0] if prop == "x" else origin[1] if prop == "y" else 0.0
        a.key(sid, prop, css_keys([(p, v + add) for p, v in stops], ease, a.frames, (delay % period) / period))

    return keys


def pingpong_anim(name, seconds, prop, lo, hi, ease="ease-in-out", reverse=False):
    def keys(sid, origin, delay):
        a = anim(name, seconds, loop="pingPong")
        add = origin[0] if prop == "x" else origin[1] if prop == "y" else 0.0
        v0, v1 = (hi, lo) if reverse else (lo, hi)
        a.key(sid, prop, [kf(0, v0 + add, EASES[ease]), kf(a.frames, v1 + add)])

    return keys


DEG = math.pi / 180


def multi(*fns):
    def keys(sid, origin, delay):
        for fn in fns:
            fn(sid, origin, delay)

    return keys


ANIM_CLASSES = {
    "drift": {"origin": "none", "keys": loop_anim("Clouds", 40, "x", [(0, -120), (1, 260)], "linear")},
    "tw": {"origin": "none", "keys": loop_anim("Twinkle", 3, "opacity", [(0, 0.3), (0.5, 1), (1, 0.3)], "ease-in-out")},
    "spinM": {"origin": "spin", "keys": loop_anim("Clock", 32, "rotation", [(0, 0), (1, 2 * math.pi)], "linear")},
    "spinH": {"origin": "spin", "keys": None},  # keyed with the minute hand below
    "blink": {"origin": "center", "keys": None},  # eyes: see eye_hook
    "tap": {"origin": "none", "keys": pingpong_anim("Typing", 0.28, "y", 0, -3)},
    "steam": {"origin": "none", "keys": multi(
        loop_anim("Steam", 3.6, "opacity", [(0, 0), (0.4, 1), (1, 0)], "ease-in-out"),
        loop_anim("Steam", 3.6, "y", [(0, 6), (1, -12)], "ease-in-out"))},
    "sway": {"origin": "bottom", "keys": pingpong_anim("Plant Sway", 5, "rotation", -4 * DEG, 4 * DEG)},
    "hang": {"origin": "top", "keys": pingpong_anim("Vine Sway", 6, "rotation", -4 * DEG, 4 * DEG)},
    "breathe": {"origin": "bottom", "keys": loop_anim("Breathe", 3.4, "scaleY", [(0, 1), (0.5, 1.07), (1, 1)], "ease-in-out")},
    # the walk is keyed in the day's walking states from the distance covered (see gait_keys)
    "bob": {"origin": "none", "keys": None},
    "legL": {"origin": "top", "keys": None},
    "legR": {"origin": "top", "keys": None},
    "armL": {"origin": "top", "keys": None},
    "armR": {"origin": "top", "keys": None},
    "shadow": {"origin": "center", "keys": None},
    "p-walk": {"origin": "none", "keys": None},
    "p-face": {"origin": "center", "keys": None},
    "p-walkv": {"origin": "none", "keys": None},
    "p-sit": {"origin": "none", "keys": None},
    "p-bedsit": {"origin": "none", "keys": None},
    "p-lie": {"origin": "none", "keys": None},
    "p-made": {"origin": "none", "keys": None},
    # small idle motion so nobody is ever perfectly still
    "nod": {"origin": "bottom", "keys": loop_anim("Head Nod", 3.2, "rotation", [(0, 0), (0.5, 1.6 * DEG), (1, 0)], "ease-in-out")},
    "breatheSoft": {"origin": "bottom", "keys": loop_anim("Breath", 3.8, "scaleY", [(0, 1), (0.45, 1.018), (1, 1)], "ease-in-out")},
    "snooze": {"origin": "bottom", "keys": loop_anim("Breathe", 3.4, "rotation", [(0, 0), (0.5, -2 * DEG), (1, 0)], "ease-in-out")},
}


def gait_keys(windows, frames, cycle, amp, step=2):
    """Walk cycle driven by the distance covered, so feet never slide and the swing fades in and out with speed.

    windows: [(f0, f1, x_at)] where x_at(frame) is the walker's x. Returns phase-sampled keys:
    swing (leg angle), bob (y, highest when the legs pass each other) and lean (0..1 of full speed)."""
    swing, bob, lean = [kf(0, 0, "hold")], [kf(0, 0, "hold")], [kf(0, 0, "hold")]
    for f0, f1, x_at in windows:
        vmax = max(abs(x_at(k + 1) - x_at(k - 1)) / 2 for k in range(f0, f1 + 1)) or 1
        start = x_at(f0)
        for fr in sorted(set(range(f0, f1, step)) | {f1}):
            v = abs(x_at(fr + 1) - x_at(fr - 1)) / 2
            s = min(1.0, v / (0.55 * vmax)) ** 0.6
            ph = 2 * math.pi * abs(x_at(fr) - start) / cycle
            last = fr == f1
            swing.append(kf(fr, 0 if last else amp * s * math.sin(ph), "hold" if last else "linear"))
            bob.append(kf(fr, 0 if last else s * (1 - abs(math.sin(ph))), "hold" if last else "linear"))
            lean.append(kf(fr, 0 if last else v / vmax, "hold" if last else "linear"))
    for keys in (swing, bob, lean):
        keys.append(kf(frames, 0, "hold"))
    return swing, bob, lean


def scaled(keys, factor, offset=0.0):
    """The same keys with every value multiplied (for arms, bob height, lean angle)."""
    return [re.sub(r'value="([-\d.e]+)"', lambda m: f'value="{f(float(m.group(1)) * factor + offset)}"', k, count=1) for k in keys]


def eased_x(f0, f1, x0, x1, curve):
    ez = bezier(*curve)
    return lambda fr: x0 + (x1 - x0) * ez(min(1.0, max(0.0, (fr - f0) / (f1 - f0))))


# ------------------------------------------------------------------ eyes that follow the pointer
LOOK = nid()  # node the pointer listener moves


def eye_rig(inner, center, reach, ind, owner="person", name="Eye"):
    """Pupil art (absolute coords) -> blink pivot at center, a look-at bone of length `reach`."""
    sid, bone = nid(), nid()
    ANIM_EYES.setdefault(owner, []).append(sid)
    cx, cy = center
    return (
        f'{ind}<Node x="{f(cx)}" y="{f(cy)}" name="{name}" id="{sid}">\n'
        f'{ind}    <RootBone length="{f(reach)}" name="Look" id="{bone}">\n'
        f'{ind}        <IKConstraint targetId="{LOOK}" parentBoneCount="0" name="Look At Pointer"/>\n'
        f'{ind}        <Node x="{f(reach - cx)}" y="{f(-cy)}" name="Pupil">\n'
        + "\n".join(inner)
        + f"\n{ind}        </Node>\n{ind}    </RootBone>\n{ind}</Node>"
    )


ANIM_EYES = {}


def eye_hook(conv, el, ctx, ind):
    x0, y0, x1, y1 = bbox(el)
    c = ((x0 + x1) / 2, (y0 + y1) / 2)
    inner = [conv.shape(el, ctx.child(el), ind + "            ", name="Pupil")]
    return [eye_rig(inner, c, 2.4, ind)]


# ------------------------------------------------------------------ hooks for the person
def z_glyph(x, y, size, ind):
    s = size * 0.5
    d = f"M{x} {y - s} H{x + s} L{x} {y} H{x + s}"
    el = ET.fromstring(f'<path d="{d}"/>')
    return CONV.shape(el, Ctx({"stroke": "#" + INK, "stroke-width": str(max(2.2, size / 10)), "stroke-linecap": "round", "stroke-linejoin": "round"}), ind, name="Z")


def z_hook(conv, el, ctx, ind):
    x, y, size = num(el, "x"), num(el, "y"), num(el, "font-size")
    delay = 0.0
    m = re.search(r"animation-delay:\s*(-?[\d.]+)s", el.get("style") or "")
    if m:
        delay = -float(m.group(1))
    sid = nid()
    a = anim("Snore", 3)
    ph = (delay % 3) / 3
    a.key(sid, "opacity", css_keys([(0, 0), (0.25, 1), (1, 0)], "ease-out", a.frames, ph or 0.0001))
    a.key(sid, "x", css_keys([(0, 0), (1, 16)], "ease-out", a.frames, ph or 0.0001))
    a.key(sid, "y", css_keys([(0, 0), (1, -38)], "ease-out", a.frames, ph or 0.0001))
    return [f'{ind}<Node name="Snore Z" id="{sid}">\n{z_glyph(x, y, size, ind + "    ")}\n{ind}</Node>']


def spin_hour_hook(conv, el, ctx, ind):
    sid = nid()
    a = anim("Clock", 32)
    # the hour hand turns 1/12 as fast; over one 32s minute-hand turn it moves 30 degrees and snaps back unnoticed
    a.key(sid, "rotation", [kf(0, 0), kf(a.frames, 30 * DEG)])
    return [
        f'{ind}<Node x="952" y="224" name="Hour Hand" id="{sid}">\n{ind}    <Node x="-952" y="-224" name="Offset">\n'
        + conv.shape(el, ctx.child(el), ind + "        ", name="Hand")
        + f"\n{ind}    </Node>\n{ind}</Node>"
    ]


def laptop_hook(conv, el, ctx, ind):
    """The laptop turned three-quarters to the room, so the screen shows: code typing itself line by line."""
    ink = Ctx({"fill": "none", "stroke": "#" + INK, "stroke-width": "2.3", "stroke-linecap": "round", "stroke-linejoin": "round"})

    def sh(svg, c, name, sid=None):
        return conv.shape(ET.fromstring(svg), c, ind, name=name, sid=sid)

    def filled(color, stroke=True):
        s = dict(ink.style)
        s["fill"] = color
        if not stroke:
            s["stroke"] = "none"
        return Ctx(s)

    # screen corners (desk-group space): bottom-left, bottom-right, top-right, top-left
    bl, br, tr, tl = (327, 220), (402, 220), (419, 155), (343, 158)
    lerp = lambda a, b, t: (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
    rows = [  # height on the screen, indent, length, colour
        (0.88, 0.0, 0.45, "F4A9B8"), (0.76, 0.1, 0.6, "CFE3C4"), (0.64, 0.2, 0.34, "FFE08A"),
        (0.52, 0.2, 0.56, "CFE0F5"), (0.40, 0.1, 0.3, "E2D6F3"), (0.28, 0.0, 0.5, "CFE3C4"), (0.16, 0.1, 0.42, "F4A9B8"),
    ]
    code = anim("Code", 8)
    lines = []
    for k, (t, indent, length, color) in enumerate(rows):
        left, right = lerp(bl, tl, t), lerp(br, tr, t)
        a, b = lerp(left, right, 0.08 + indent), lerp(left, right, 0.08 + indent + length)
        trim = nid()
        start = 18 + k * 52
        dur = max(16, round(length * 70))
        code.key(trim, "end", [kf(0, 0, "hold"), kf(start, 0), kf(start + dur, 1, "hold"), kf(440, 0, "hold"), kf(code.frames, 0, "hold")])
        lines.append(
            f'{ind}<Shape name="Code Line">\n'
            + contour_rml({"start": a, "segs": [("L", b)], "closed": False}, ind + "    ") + "\n"
            + f'{ind}    <Stroke thickness="3" cap="round" join="round" name="Stroke">\n'
            f'{ind}        {solid(argb(color))}\n'
            f'{ind}        <TrimPath start="0" end="0" name="Typing" id="{trim}"/>\n'
            f"{ind}    </Stroke>\n{ind}</Shape>"
        )
    screen = f"M{bl[0]} {bl[1]} L{br[0]} {br[1]} L{tr[0]} {tr[1]} L{tl[0]} {tl[1]} Z"
    return lines + [
        sh(f'<path d="{screen}"/>', filled("#2B2F4A", stroke=False), "Screen"),
        sh('<path d="M318 228 L410 228 L431 145 L335 149 Z"/>', filled("#FFFDF8"), "Lid"),
        sh('<path d="M320 236 H384 M326 232 H396"/>', Ctx({"stroke": "#" + INK, "stroke-width": "1.4", "stroke-opacity": "0.3", "stroke-linecap": "round"}), "Keys"),
        sh('<path d="M296 240 L392 240 L410 228 L318 228 Z"/>', filled("#FFFDF8"), "Deck"),
        sh('<rect x="296" y="240" width="96" height="5" rx="2"/>', filled("#E9E4DA"), "Deck Edge"),
    ]


# ------------------------------------------------------------------ the cat
def cat_rml(ind):
    """Rigged cat: walk / sit / sleep poses in a Solo, bone tails, pointer-following eyes, pet reaction."""
    C = {k: nid() for k in "mover hop facing solo walk sit sleep bob leg1 leg2 leg3 leg4 breathe z1 z2 z3 heart hit happy open shadow ears".split()}
    stroke_ctx = lambda w, c=INK: Ctx({"stroke": "#" + c, "stroke-width": str(w), "stroke-linecap": "round", "stroke-linejoin": "round"})
    fill_ctx = lambda c, stroke=True: Ctx({"fill": "#" + c, "stroke": "#" + INK if stroke else "none", "stroke-width": "2.4", "stroke-linecap": "round", "stroke-linejoin": "round"})

    def sh(svg, ctx, i, name):
        return CONV.shape(ET.fromstring(svg), ctx, i, name=name)

    def tail_rig(name, base, base_rot, length, rest, wave, i):
        """Three-bone tail. The stroke is skinned to the chain, so it bends instead of swinging stiffly."""
        b = [nid(), nid(), nid()]
        L = length
        h = L / 3
        w_full = lambda t: (t + 1, 255)
        w_half = lambda a, c: ((a + 1) | ((c + 1) << 8), 128 | (127 << 8))
        verts = []
        specs = [  # x, vertex weight, in weight, out weight
            (0, w_full(0), w_full(0), w_full(0)),
            (L, w_full(1), w_half(0, 1), w_half(0, 1)),
            (2 * L, w_full(2), w_half(1, 2), w_half(1, 2)),
            (3 * L, w_full(2), w_full(2), w_full(2)),
        ]
        for k, (x, vw, iw, ow) in enumerate(specs):
            ind_d = h if k > 0 else 0
            out_d = h if k < 3 else 0
            verts.append(
                f'{i}            <CubicDetachedVertex x="{f(x)}" y="0" inRotation="{f(math.pi)}" inDistance="{f(ind_d)}" outRotation="0" outDistance="{f(out_d)}">\n'
                f'{i}                <CubicWeight indices="{vw[0]}" values="{vw[1]}" inIndices="{iw[0]}" inValues="{iw[1]}" outIndices="{ow[0]}" outValues="{ow[1]}"/>\n'
                f"{i}            </CubicDetachedVertex>"
            )
        shape = (
            f'{i}    <Shape name="Tail">\n'
            f'{i}        <PointsPath isClosed="false" name="Path">\n' + "\n".join(verts) + "\n"
            f'{i}            <Skin name="Skin">\n'
            f'{i}                <Tendon boneId="{b[0]}" tx="0" ty="0" name="Base"/>\n'
            f'{i}                <Tendon boneId="{b[1]}" tx="{f(L)}" ty="0" name="Mid"/>\n'
            f'{i}                <Tendon boneId="{b[2]}" tx="{f(2 * L)}" ty="0" name="Tip"/>\n'
            f"{i}            </Skin>\n"
            f"{i}        </PointsPath>\n"
            + stroke_rml(argb(INK), 8, i + "        ") + "\n"
            + stroke_rml(argb(GINGER), 4, i + "        ") + "\n"
            f"{i}    </Shape>"
        )
        bones = (
            f'{i}    <RootBone length="{f(L)}" name="Tail 1" id="{b[0]}">\n'
            f'{i}        <Bone length="{f(L)}" name="Tail 2" id="{b[1]}">\n'
            f'{i}            <Bone length="{f(L)}" name="Tail 3" id="{b[2]}"/>\n'
            f"{i}        </Bone>\n{i}    </RootBone>"
        )
        a = anim(f"Tail Swish {name}", wave[0])
        for k in range(3):
            a.key(b[k], "rotation", wave_keys(rest[k], wave[1][k], a.frames, lag=0.9 * k))
        return f'{i}<Node x="{f(base[0])}" y="{f(base[1])}" rotation="{f(base_rot)}" name="Tail {name}">\n{shape}\n{bones}\n{i}</Node>'

    def leg(name, sid, x, i):
        return (
            f'{i}<Node x="{f(x + 5)}" y="-16" name="{name}" id="{sid}">\n'
            + sh('<rect x="-5" y="0" width="10" height="17" rx="5"/>', fill_ctx(GINGER), i + "    ", "Paw")
            + f"\n{i}</Node>"
        )

    def pupil(cx, cy, r, i, name="Eye"):
        inner = [sh(f'<circle cx="{cx}" cy="{cy}" r="{r}"/>', fill_ctx(INK, False), i + "            ", "Pupil")]
        return eye_rig(inner, (cx, cy), 2.0, i, owner="cat", name=name)

    I2 = ind + "        " * 2
    i3 = I2 + "        "
    walk = [
        sh('<path d="M54 -34 H62 M54 -30 L61 -27"/>', stroke_ctx(1.4), i3, "Whiskers"),
        sh('<ellipse cx="46" cy="-30" rx="4" ry="2.4"/>', fill_ctx(PINK, False), i3, "Cheek"),
        sh('<path d="M50 -32 L52 -30"/>', stroke_ctx(2), i3, "Mouth"),
        pupil(44, -38, 2.4, i3),
        sh('<circle cx="38" cy="-36" r="16"/>', fill_ctx(GINGER), i3, "Head"),
        sh('<path d="M26 -46 L26 -62 L36 -51 Z M40 -51 L50 -62 L50 -46 Z"/>', fill_ctx(GINGER), i3, "Ears"),
        sh('<path d="M-12 -38 Q-9 -30 -13 -22 M-1 -39 Q2 -31 -2 -23 M10 -38 Q12 -31 9 -24"/>', stroke_ctx(2.6, STRIPE), i3, "Stripes"),
        sh('<ellipse cx="0" cy="-24" rx="33" ry="15"/>', fill_ctx(GINGER), i3, "Body"),
        leg("Leg 4", C["leg4"], 22, i3), leg("Leg 3", C["leg3"], 10, i3),
        leg("Leg 2", C["leg2"], -12, i3), leg("Leg 1", C["leg1"], -24, i3),
        tail_rig("Walk", (-28, -26), -167 * DEG, 15, (0.35, 0.75, 0.85), (3.6, (0.22, 0.25, 0.3)), i3),
    ]
    walk_n = (f'{I2}<Node name="Walk" id="{C["walk"]}">\n{I2}    <Node name="Bob" id="{C["bob"]}">\n'
              + "\n".join(walk) + f"\n{I2}    </Node>\n{I2}</Node>")
    i3s = I2 + "    "
    happy = sh('<path d="M-3 -61 Q1 -57 5 -61 M10 -61 Q14 -57 18 -61"/>', stroke_ctx(2), i3s + "    ", "Happy Eyes")
    sit = [
        sh('<ellipse cx="19" cy="-54" rx="4" ry="2.4"/>', fill_ctx(PINK, False), i3s, "Cheek R"),
        sh('<ellipse cx="-3" cy="-54" rx="4" ry="2.4"/>', fill_ctx(PINK, False), i3s, "Cheek L"),
        sh('<path d="M5 -55 Q7 -53 9 -55"/>', stroke_ctx(1.8), i3s, "Mouth"),
        f'{i3s}<Node opacity="0" name="Happy" id="{C["happy"]}">\n{happy}\n{i3s}</Node>',
        f'{i3s}<Node name="Open Eyes" id="{C["open"]}">\n' + pupil(1, -62, 2.6, i3s + "    ", "Eye L") + "\n" + pupil(14, -62, 2.6, i3s + "    ", "Eye R") + f"\n{i3s}</Node>",
        sh('<path d="M-6 -70 Q-2 -64 2 -70"/>', stroke_ctx(2.4, STRIPE), i3s, "Head Stripe"),
        sh('<circle cx="7" cy="-62" r="17"/>', fill_ctx(GINGER), i3s, "Head"),
        f'{i3s}<Node x="7" y="-66" name="Ears Pivot" id="{C["ears"]}">\n{i3s}    <Node x="-7" y="66" name="Offset">\n'
        + sh('<path d="M-6 -70 L-6 -86 L4 -75 Z M10 -75 L20 -86 L20 -70 Z"/>', fill_ctx(GINGER), i3s + "        ", "Ears")
        + f"\n{i3s}    </Node>\n{i3s}</Node>",
        sh('<rect x="12" y="-20" width="9" height="20" rx="4.5"/>', fill_ctx(GINGER), i3s, "Paw R"),
        sh('<rect x="2" y="-20" width="9" height="20" rx="4.5"/>', fill_ctx(GINGER), i3s, "Paw L"),
        sh('<ellipse cx="8" cy="-24" rx="9" ry="13"/>', fill_ctx(CREAM, False), i3s, "Chest"),
        sh('<path d="M-12 -30 Q-8 -24 -12 -18 M-2 -32 Q2 -26 -2 -20"/>', stroke_ctx(2.6, STRIPE), i3s, "Stripes"),
        sh('<path d="M-22 0 C-26 -30 -14 -52 4 -52 C22 -52 28 -30 22 0 Z"/>', fill_ctx(GINGER), i3s, "Body"),
        tail_rig("Sit", (-16, -2), 0.46, 16.5, (-0.25, -0.45, -0.65), (3.0, (0.06, 0.15, 0.32)), i3s),
    ]
    sit_n = f'{I2}<Node name="Sit" id="{C["sit"]}">\n' + "\n".join(sit) + f"\n{I2}</Node>"

    def zee(name, sid, size, i):
        return f'{i}<Node x="40" y="-52" name="{name}" id="{sid}">\n{z_glyph(-size / 2, size / 2, size * 2, i + "    ")}\n{i}</Node>'

    sleep = [
        zee("Z 1", C["z1"], 9, i3s), zee("Z 2", C["z2"], 11, i3s), zee("Z 3", C["z3"], 13, i3s),
        f'{i3s}<Node name="Breathe" id="{C["breathe"]}">\n' + "\n".join([
            sh('<ellipse cx="33" cy="-15" rx="3.6" ry="2.2"/>', fill_ctx(PINK, False), i3s + "    ", "Cheek"),
            sh('<path d="M24 -21 Q28 -17 32 -21"/>', stroke_ctx(2), i3s + "    ", "Eye"),
            sh('<ellipse cx="26" cy="-21" rx="15" ry="14"/>', fill_ctx(GINGER), i3s + "    ", "Head"),
            sh('<path d="M14 -28 L13 -43 L23 -34 Z M27 -35 L37 -42 L38 -28 Z"/>', fill_ctx(GINGER), i3s + "    ", "Ears"),
            sh('<path d="M-34 -8 C-44 6 6 10 36 0"/>', stroke_ctx(8), i3s + "    ", "Tail").replace(
                "    </Shape>", "\n" + stroke_rml(argb(GINGER), 4, i3s + "        ") + "\n" + i3s + "    </Shape>", 1),
            sh('<path d="M-14 -31 Q-11 -24 -15 -17 M-3 -33 Q0 -26 -4 -19 M8 -32 Q10 -26 7 -20"/>', stroke_ctx(2.6, STRIPE), i3s + "    ", "Stripes"),
            sh('<ellipse cx="0" cy="-17" rx="36" ry="17"/>', fill_ctx(GINGER), i3s + "    ", "Body"),
        ]) + f"\n{i3s}</Node>",
    ]
    sleep_n = f'{I2}<Node name="Sleep" id="{C["sleep"]}">\n' + "\n".join(sleep) + f"\n{I2}</Node>"

    heart = sh('<path d="M0 7 C-12 -1 -11 -12 -4 -12 C-1 -12 0 -9 0 -8 C0 -9 1 -12 4 -12 C11 -12 12 -1 0 7 Z"/>', fill_ctx(PINK), ind + "        ", "Heart")
    heart = heart.replace('<Shape name="Heart">', f'<Shape x="12" y="-104" opacity="0" name="Heart" id="{C["heart"]}">', 1)
    hit = (f'{ind}    <Shape x="8" y="-44" name="Cat Hit Area" id="{C["hit"]}">\n'
           f'{ind}        <Rectangle width="130" height="100" name="Path"/>\n' + fill_rml("00000000", ind + "        ") + f"\n{ind}    </Shape>")
    solo = (f'{ind}            <Solo activeComponentId="{C["sit"]}" name="Poses" id="{C["solo"]}">\n'
            + "\n".join([walk_n, sit_n, sleep_n]) + f"\n{ind}            </Solo>")
    shadow = (f'{ind}    <Shape x="4" y="-1" name="Cat Shadow" id="{C["shadow"]}">\n'
              f'{ind}        <Ellipse width="64" height="9" name="Path"/>\n' + fill_rml(argb(INK, 0.13), ind + "        ") + f"\n{ind}    </Shape>")
    rml = (
        f'{ind}<Node x="330" y="840" name="Cat" id="{C["mover"]}">\n{heart}\n'
        f'{ind}    <Node name="Hop" id="{C["hop"]}">\n{ind}        <Node name="Facing" id="{C["facing"]}">\n{solo}\n'
        f"{ind}        </Node>\n{ind}    </Node>\n{shadow}\n{hit}\n{ind}</Node>"
    )

    # cat timelines: the 40s patrol from the mockup, plus a nap on the far side
    p = anim("Cat Patrol", 40)
    ez = (0.42, 0, 0.58, 1)
    p.key(C["mover"], "x", [kf(0, 330, "hold"), kf(360, 330, ez), kf(840, 1000, "hold"), kf(1320, 1000, ez), kf(1920, 330, "hold"), kf(2400, 330, "hold")])
    p.key(C["facing"], "scaleX", [kf(0, 1, "hold"), kf(1320, -1, "hold"), kf(2399, 1, "hold")])
    p.key(C["solo"], 296, [f'<KeyFrameId frame="{fr}" value="{v}" interpolationType="hold"/>' for fr, v in
                           ((0, C["sit"]), (360, C["walk"]), (840, C["sleep"]), (1320, C["walk"]), (1920, C["sit"]))])
    # legs in diagonal pairs, stepping with the distance walked
    swing, bob, _ = gait_keys([(360, 840, eased_x(360, 840, 330, 1000, ez)), (1320, 1920, eased_x(1320, 1920, 1000, 330, ez))],
                              p.frames, cycle=30, amp=26 * DEG, step=3)
    for leg_id, sign in ((C["leg1"], 1), (C["leg4"], 1), (C["leg2"], -1), (C["leg3"], -1)):
        p.key(leg_id, "rotation", scaled(swing, sign))
    p.key(C["bob"], "y", scaled(bob, -2))
    idle_life = anim("Cat Idle", 6.5)  # an ear flick now and then, and slow breathing while sitting
    idle_life.key(C["ears"], "rotation", [kf(0, 0, "hold"), kf(250, 0, ez), kf(255, -9 * DEG, ez), kf(261, 3 * DEG, ez), kf(268, 0, "hold"), kf(idle_life.frames, 0, "hold")])
    breath = anim("Cat Breath", 3.2)
    breath.key(C["sit"], "scaleY", css_keys([(0, 1), (0.45, 1.022), (1, 1)], "ease-in-out", breath.frames))
    s = anim("Cat Nap", 3)
    s.key(C["breathe"], "scaleY", css_keys([(0, 1), (0.5, 1.06), (1, 1)], "ease-in-out", s.frames))
    for k, (zid, ph) in enumerate(((C["z1"], 0.0001), (C["z2"], 1 / 3), (C["z3"], 2 / 3))):
        s.key(zid, "opacity", css_keys([(0, 0), (0.25, 1), (1, 0)], "ease-out", s.frames, ph))
        s.key(zid, "x", css_keys([(0, 40), (1, 56)], "ease-out", s.frames, ph))
        s.key(zid, "y", css_keys([(0, -52), (1, -90)], "ease-out", s.frames, ph))
    idle = anim("Cat Pet Idle", frames=1, loop="oneShot")
    idle.key(C["hop"], "y", [kf(0, 0, "hold")])
    idle.key(C["hop"], "scaleY", [kf(0, 1, "hold")])
    idle.key(C["shadow"], "scaleX", [kf(0, 1, "hold")])
    idle.key(C["heart"], "opacity", [kf(0, 0, "hold")])
    idle.key(C["happy"], "opacity", [kf(0, 0, "hold")])
    idle.key(C["open"], "opacity", [kf(0, 1, "hold")])
    pet = anim("Cat Pet", frames=54, loop="oneShot")
    pet.key(C["hop"], "y", [kf(0, 0, (0.2, 0.7, 0.4, 1)), kf(9, -16, (0.5, 0, 0.8, 0.4)), kf(20, 0, "hold")])
    pet.key(C["shadow"], "scaleX", [kf(0, 1, (0.2, 0.7, 0.4, 1)), kf(9, 0.7, (0.5, 0, 0.8, 0.4)), kf(20, 1, "hold")])
    pet.key(C["hop"], "scaleY", [kf(0, 1, "hold"), kf(19, 1, ez), kf(22, 0.9, ez), kf(28, 1, "hold")])
    pet.key(C["heart"], "opacity", [kf(0, 0), kf(5, 1), kf(34, 1), kf(54, 0)])
    pet.key(C["heart"], "y", [kf(0, -96, ez), kf(54, -136)])
    pet.key(C["heart"], "scaleX", [kf(0, 0.4, ez), kf(10, 1.2, ez), kf(18, 1)])
    pet.key(C["heart"], "scaleY", [kf(0, 0.4, ez), kf(10, 1.2, ez), kf(18, 1)])
    pet.key(C["happy"], "opacity", [kf(0, 1, "hold"), kf(48, 0, "hold")])
    pet.key(C["open"], "opacity", [kf(0, 0, "hold"), kf(48, 1, "hold")])
    return rml, C["hit"]


# ------------------------------------------------------------------ hooks wiring
ROOT = ET.parse(os.path.join(HERE, "scene.svg")).getroot()
CONV = Converter(ROOT)
CONV.hooks["blink"] = eye_hook
CONV.hooks["z"] = z_hook
CONV.hooks["spinH"] = spin_hour_hook
CONV.hooks["laptop"] = laptop_hook


def person_timelines(vm):
    """The day: coding -> to bed -> stretch -> sleep -> stretch -> back to the desk. Each state reports `activity`."""
    ids = CONV.by_class
    walker, face = ids["p-walk"][0], ids["p-face"][0]
    vis_keys = ("p-sit", "p-walkv", "p-bedsit", "p-lie", "p-made")
    stretch_l, stretch_r = ids["stretchL:rotate"][0], ids["stretchR:rotate"][0]
    ez = (0.45, 0, 0.55, 1)

    def state(name, frames, show, x_keys, facing, extra=None):
        a = anim(name, frames=frames, loop="oneShot")
        for cls in vis_keys:
            for sid in ids[cls]:
                a.key(sid, "opacity", [kf(0, 1 if cls in show else 0, "hold")])
        a.key(walker, "x", x_keys)
        a.key(walker, "y", [kf(0, 812, "hold")])
        a.key(face, "scaleX", [kf(0, facing, "hold")])
        if extra:
            extra(a)
        return a

    def stretch(a):
        n = a.frames
        a.key(stretch_l, "rotation", [kf(0, -20 * DEG, ez), kf(n // 2, -34 * DEG, ez), kf(n, -20 * DEG)])
        a.key(stretch_r, "rotation", [kf(0, 20 * DEG, ez), kf(n // 2, 34 * DEG, ez), kf(n, 20 * DEG)])

    def walk(x0, x1):
        """Legs and arms swing with the distance covered; a bob on every step; a slight lean while moving."""
        def extra(a):
            swing, bob, lean = gait_keys([(38, 269, eased_x(38, 269, x0, x1, ez))], a.frames, cycle=80, amp=20 * DEG)
            a.key(ids["legL"][0], "rotation", swing)
            a.key(ids["legR"][0], "rotation", scaled(swing, -1))
            a.key(ids["armL"][0], "rotation", scaled(swing, -0.85))
            a.key(ids["armR"][0], "rotation", scaled(swing, 0.85))
            a.key(ids["bob"][0], "y", scaled(bob, -3.5))
            a.key(ids["bob"][0], "rotation", scaled(lean, 3.5 * DEG))
        return extra

    coding = state("Day Coding", 690, ("p-sit", "p-made"), [kf(0, 262, "hold")], 1)
    to_bed = state("Day To Bed", 269, ("p-walkv", "p-made"), [kf(0, 262, "hold"), kf(38, 262, ez), kf(269, 652, "hold")], 1, walk(262, 652))
    stretch1 = state("Day Stretch", 96, ("p-bedsit", "p-made"), [kf(0, 652, "hold")], 1, stretch)
    sleep = state("Day Sleep", 499, ("p-lie",), [kf(0, 652, "hold")], 1)
    wake = state("Day Wake", 96, ("p-bedsit", "p-made"), [kf(0, 652, "hold")], 1, stretch)
    to_desk = state("Day To Desk", 307, ("p-walkv", "p-made"), [kf(0, 652, "hold"), kf(38, 652, ez), kf(269, 262, "hold"), kf(307, 262, "hold")], -1, walk(652, 262))
    return [(coding, 0), (to_bed, 1), (stretch1, 1), (sleep, 2), (wake, 3), (to_desk, 3)]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    backdrop = "--backdrop" in sys.argv
    out = args[0]

    # convert the room (the scene's single top-level <g>)
    main_g = ROOT.find("g")
    base = Ctx({k: main_g.get(k) for k in INHERIT if main_g.get(k)})
    room = []
    for c in main_g:
        room = CONV.convert(c, base, "        ") + room

    cat, cat_hit = cat_rml("        ")

    # the person's sitting eye is a short dash, the walking eyes are dots: all were class="blink"
    # people blink quick and often; the cat blinks slowly, and on its own clock
    blink = anim("Blink", 4.2)
    for sid in ANIM_EYES.get("person", []):
        blink.key(sid, "scaleY", [kf(0, 1), kf(229, 1), kf(233, 0.1), kf(238, 1), kf(blink.frames, 1)])
    cat_blink = anim("Cat Blink", 6.5)
    for sid in ANIM_EYES.get("cat", []):
        cat_blink.key(sid, "scaleY", [kf(0, 1), kf(320, 1, EASES["ease-in-out"]), kf(334, 0.1, "hold"), kf(346, 0.1, EASES["ease-in-out"]), kf(362, 1), kf(cat_blink.frames, 1)])

    vm = {k: nid() for k in "vm inst night activity pet poke".split()}
    day = person_timelines(vm)

    theme_day = anim("Theme Day", frames=1, loop="oneShot")
    theme_night = anim("Theme Night", frames=1, loop="oneShot")
    for sid in CONV.by_class["day"]:
        theme_day.key(sid, "opacity", [kf(0, 1, "hold")])
        theme_night.key(sid, "opacity", [kf(0, 0, "hold")])
    for sid in CONV.by_class["night"]:
        theme_day.key(sid, "opacity", [kf(0, 0, "hold")])
        theme_night.key(sid, "opacity", [kf(0, 1, "hold")])

    person_hit = nid()
    pointer_area = nid()
    look_node = f'        <Node x="720" y="380" name="Look Target" id="{LOOK}"/>'
    hits = (
        f'        <Shape name="Person Hit Area" id="{person_hit}">\n'
        f'            <Rectangle x="160" y="560" width="160" height="250" originX="0" originY="0" name="Path"/>\n'
        + fill_rml("00000000", "            ") + "\n        </Shape>\n"
        f'        <Shape name="Pointer Area" id="{pointer_area}">\n'
        f'            <Rectangle width="1440" height="900" originX="0" originY="0" name="Path"/>\n'
        + fill_rml("00000000", "            ") + "\n        </Shape>"
    )

    # ---------------- state machine
    def cond(prop_id, kind, value):
        if kind == "trigger":
            return (f'<TransitionViewModelCondition><TransitionPropertyViewModelComparator><BindablePropertyTrigger>'
                    f'<DataBindContext sourcePathIds="{vm["vm"]}-{prop_id}" propertyKey="686"/></BindablePropertyTrigger>'
                    f'</TransitionPropertyViewModelComparator><TransitionValueTriggerComparator/></TransitionViewModelCondition>')
        return (f'<TransitionViewModelCondition><TransitionPropertyViewModelComparator><BindablePropertyBoolean>'
                f'<DataBindContext sourcePathIds="{vm["vm"]}-{prop_id}" propertyKey="634"/></BindablePropertyBoolean>'
                f'</TransitionPropertyViewModelComparator><TransitionValueBooleanComparator value="{value}"/></TransitionViewModelCondition>')

    def loop_layer(name, a, y):
        sid = nid()
        return (f'            <StateMachineLayer name="{name}">\n'
                f'                <AnyState x="0" y="{y - 80}"/>\n                <ExitState x="400" y="{y - 80}"/>\n'
                f'                <EntryState x="0" y="{y}"><StateTransition stateToId="{sid}"/></EntryState>\n'
                f'                <AnimationState x="200" y="{y}" animationId="{a.id}" id="{sid}"/>\n'
                f"            </StateMachineLayer>")

    layers = []
    # the day, one state per stretch of it; each writes `activity` for the page
    sids = [nid() for _ in day]
    st = []
    for k, ((a, act), sid) in enumerate(zip(day, sids)):
        nxt = sids[(k + 1) % len(sids)]
        st.append(
            f'                <AnimationState x="{160 + 180 * k}" y="0" animationId="{a.id}" id="{sid}">\n'
            f'                    <ListenerViewModelChange><BindablePropertyNumber propertyValue="{act}">'
            f'<DataBindContext sourcePathIds="{vm["vm"]}-{vm["activity"]}" propertyKey="636" direction="true"/>'
            f"</BindablePropertyNumber></ListenerViewModelChange>\n"
            f'                    <StateTransition stateToId="{nxt}" duration="220" enableExitTime="true" exitTimeIsPercetange="true" exitTime="100"/>\n'
            f"                </AnimationState>"
        )
    layers.append(
        '            <StateMachineLayer name="Day">\n'
        f'                <AnyState x="0" y="-80"/>\n                <ExitState x="{160 + 180 * len(day)}" y="-80"/>\n'
        f'                <EntryState x="0" y="0"><StateTransition stateToId="{sids[0]}"/></EntryState>\n'
        + "\n".join(st) + "\n            </StateMachineLayer>"
    )
    day_s, night_s = nid(), nid()
    layers.append(
        '            <StateMachineLayer name="Theme">\n'
        '                <AnyState x="0" y="-80"/>\n                <ExitState x="560" y="-80"/>\n'
        f'                <EntryState x="0" y="0">\n'
        f'                    <StateTransition stateToId="{night_s}">{cond(vm["night"], "bool", "true")}</StateTransition>\n'
        f'                    <StateTransition stateToId="{day_s}"/>\n                </EntryState>\n'
        f'                <AnimationState x="200" y="0" animationId="{theme_day.id}" id="{day_s}">\n'
        f'                    <StateTransition stateToId="{night_s}" duration="800">{cond(vm["night"], "bool", "true")}</StateTransition>\n'
        f"                </AnimationState>\n"
        f'                <AnimationState x="400" y="0" animationId="{theme_night.id}" id="{night_s}">\n'
        f'                    <StateTransition stateToId="{day_s}" duration="800">{cond(vm["night"], "bool", "false")}</StateTransition>\n'
        f"                </AnimationState>\n            </StateMachineLayer>"
    )
    idle_s, pet_s = nid(), nid()
    layers.append(
        '            <StateMachineLayer name="Cat Pet">\n'
        '                <AnyState x="0" y="-80"/>\n                <ExitState x="560" y="-80"/>\n'
        f'                <EntryState x="0" y="0"><StateTransition stateToId="{idle_s}"/></EntryState>\n'
        f'                <AnimationState x="200" y="0" animationId="{ANIMS["Cat Pet Idle"].id}" id="{idle_s}">\n'
        f'                    <StateTransition stateToId="{pet_s}">{cond(vm["pet"], "trigger", None)}</StateTransition>\n'
        f"                </AnimationState>\n"
        f'                <AnimationState x="400" y="0" animationId="{ANIMS["Cat Pet"].id}" reset="true" id="{pet_s}">\n'
        f'                    <StateTransition stateToId="{idle_s}" enableExitTime="true" exitTimeIsPercetange="true" exitTime="100"/>\n'
        f'                    <StateTransition stateToId="{pet_s}">{cond(vm["pet"], "trigger", None)}</StateTransition>\n'
        f"                </AnimationState>\n            </StateMachineLayer>"
    )
    skip = {"Cat Pet", "Cat Pet Idle", "Theme Day", "Theme Night"} | {a.name for a, _ in day}
    for k, a in enumerate(a for a in ANIMS.values() if a.name not in skip):
        layers.append(loop_layer(a.name, a, 0))

    def trig_listener(target, prop, name):
        return (f'            <StateMachineListenerSingle targetId="{target}" listenerTypeValue="click" name="{name}">\n'
                f'                <ListenerViewModelChange><BindablePropertyTrigger propertyValue="1">'
                f'<DataBindContext sourcePathIds="{vm["vm"]}-{prop}" propertyKey="686" direction="true"/>'
                f"</BindablePropertyTrigger></ListenerViewModelChange>\n            </StateMachineListenerSingle>")

    listeners = [
        f'            <StateMachineListenerSingle targetId="{pointer_area}" listenerTypeValue="move" name="Eyes Follow Pointer">\n'
        f'                <ListenerAlignTarget targetId="{LOOK}"/>\n            </StateMachineListenerSingle>',
        trig_listener(cat_hit, vm["pet"], "Pet The Cat"),
        trig_listener(person_hit, vm["poke"], "Say Hi"),
    ]
    sm_id = nid()
    sm = f'        <StateMachine name="Room" id="{sm_id}">\n' + "\n".join(layers + listeners) + "\n        </StateMachine>"

    backdrop_rml = ""
    if backdrop:
        backdrop_rml = (
            '        <Shape name="Preview Floor Band">\n'
            '            <Rectangle x="0" y="690" width="1440" height="16" originX="0" originY="0" name="Path"/>\n'
            + fill_rml(argb("D3BC9C"), "            ") + "\n        </Shape>\n"
            '        <Shape name="Preview Floor">\n'
            '            <Rectangle x="0" y="690" width="1440" height="210" originX="0" originY="0" name="Path"/>\n'
            + fill_rml(argb("E4D0B4"), "            ") + "\n"
            + stroke_rml(argb(INK), 3, "            ") + "\n        </Shape>\n"
            '        <Shape name="Preview Wall">\n'
            '            <Rectangle width="1440" height="900" originX="0" originY="0" name="Path"/>\n'
            + fill_rml(argb("EFE6D6"), "            ") + "\n        </Shape>"
        )

    style_id = nid()
    art_id = nid()
    doc = f"""<Rive version="1" kind="fragment">
    <Artboard defaultStateMachineId="{sm_id}" viewModelId="{vm['vm']}" viewModelInstanceId="{vm['inst']}" styleId="{style_id}" width="1440" height="900" name="Room" id="{art_id}">
        <LayoutComponentStyle name="Artboard Style" id="{style_id}"/>
{sm}
{look_node}
{hits}
{cat}
{chr(10).join(room)}
{chr(10).join(CONV.extra_roots)}
{backdrop_rml}
{chr(10).join(a.rml() for a in ANIMS.values())}
    </Artboard>

    <ViewModel defaultInstanceId="{vm['inst']}" name="Room" id="{vm['vm']}">
        <ViewModelPropertyBoolean name="night" id="{vm['night']}"/>
        <ViewModelPropertyNumber name="activity" id="{vm['activity']}"/>
        <ViewModelPropertyTrigger name="pet" id="{vm['pet']}"/>
        <ViewModelPropertyTrigger name="poke" id="{vm['poke']}"/>
        <ViewModelInstance exports="true" name="Default" id="{vm['inst']}">
            <ViewModelInstanceBoolean propertyValue="false" viewModelPropertyId="{vm['night']}"/>
            <ViewModelInstanceNumber propertyValue="0" viewModelPropertyId="{vm['activity']}"/>
            <ViewModelInstanceTrigger viewModelPropertyId="{vm['pet']}"/>
            <ViewModelInstanceTrigger viewModelPropertyId="{vm['poke']}"/>
        </ViewModelInstance>
    </ViewModel>
</Rive>
"""
    with open(out, "w") as fh:
        fh.write(doc)


if __name__ == "__main__":
    main()
