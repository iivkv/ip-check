(function () {
  function sendResult(ip, err) {
    try { window.__ipWidgetCallback && window.__ipWidgetCallback(ip, err); } catch (e) {}
  }

  fetch('https://icanhazip.com/')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (txt) {
      var ip = (txt || '').trim();
      // simple validation (IPv4 or IPv6)
      var ok = /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) || /^[0-9a-fA-F:]+$/.test(ip);
      if (!ok) throw new Error('Invalid IP format: ' + ip);
      sendResult(ip);
    })
    .catch(function (err) {
      sendResult(null, err && err.message ? err.message : String(err));
    });
})();
