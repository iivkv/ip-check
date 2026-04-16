(function () {  
  function sendResult(ip, err) {    
    try {      
      if (window.__ipWidgetCallback) {window.__ipWidgetCallback(ip, err);}
    } catch (e) {}  
  }
  fetch('https://icanhazip.com').then(function (response) {
    if (!response.ok) throw new Error('HTTP ' + response.status);      
     return response;
  }).then(function (data) {
    sendResult(data.ip);    
  }).catch(function (err) {
    sendResult(null, err && err.message ? err.message : String(err));
  console.log('widget running');
  });
})();
