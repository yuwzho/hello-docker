var https = require('https');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!!!');
};

var credentials = {
  key: process.env['tls.key'],
  cert: process.env['tls.crt']
};

var www = https.createServer(credentials, handleRequest);
www.listen(443);
