var https = require('https');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!!!');
};

var credentials = {
  key: Buffer.from(process.env['tls.key'], 'base64'),
  cert: Buffer.from(process.env['tls.crt'], 'base64')
};

var www = https.createServer(credentials, handleRequest);
www.listen(443);
