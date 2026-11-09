// The Kobo page's download box. The latest build is described by https://media.wanngo.com/kobo/latest.json
// ({version, url, size, sha256, notes, source}); until that file exists, or when it can't be read, the button stays "Coming soon".
(function () {
  var card = document.getElementById('kobo-dl');
  if (!card || !window.fetch) return;
  var button = document.getElementById('kobo-btn');
  var info = document.getElementById('kobo-info');
  var fine = document.getElementById('kobo-fine');
  var host = 'media.wanngo.com';

  function safe(href) {
    try {
      var u = new URL(href, 'https://' + host + '/');
      return u.protocol === 'https:' && u.hostname === host ? u.href : '';
    } catch (e) { return ''; }
  }

  function megabytes(bytes) {
    var n = Number(bytes);
    if (!(n > 0)) return '';
    var mb = n / 1e6;
    return (mb < 10 ? mb.toFixed(1) : Math.round(mb)) + ' MB';
  }

  function fill(j) {
    var url = safe(j.url);
    if (!j || typeof j.version !== 'string' || !url) return;
    var size = megabytes(j.size);
    info.textContent = card.dataset.ver + ' ' + j.version + (size ? ' · ' + size : '') + (j.notes ? ' — ' + String(j.notes).slice(0, 160) : '');
    button.href = url;
    button.textContent = card.dataset.get;
    button.classList.remove('off');
    button.removeAttribute('aria-disabled');

    var parts = [];
    if (/^[0-9a-f]{64}$/i.test(j.sha256 || '')) {
      var sha = document.createElement('span');
      sha.append('SHA-256 ');
      var code = document.createElement('code');
      code.textContent = j.sha256.toLowerCase();
      sha.append(code);
      parts.push(sha);
    }
    var source = safe(j.source);
    if (source) {
      var a = document.createElement('a');
      a.href = source;
      a.textContent = card.dataset.src;
      parts.push(a);
    }
    parts.forEach(function (p, i) { if (i) fine.append(' · '); fine.append(p); });
    fine.hidden = !parts.length;
  }

  var abort = window.AbortController ? new AbortController() : null;
  var timer = abort && setTimeout(function () { abort.abort(); }, 8000);
  fetch('https://' + host + '/kobo/latest.json', { cache: 'no-cache', signal: abort ? abort.signal : undefined })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(fill)
    .catch(function () {})
    .then(function () { if (timer) clearTimeout(timer); });
})();
