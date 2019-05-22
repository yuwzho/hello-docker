var http = require('http');

var handleRequest = function(request, response) {
  http.get('http://127.0.0.1:8080', (res) => {
    var code = res.statusCode;
    response.writeHead(code)
    if (code !== 200) {
      response.end("error")
    } else {
      var rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        try {
          response.end("this is get from backend: " + rawData);
        } catch (e) {
          response.end(e.message);
        }
      });
    }

  })
};
var www = http.createServer(handleRequest);
www.listen(80);
