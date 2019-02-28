var http = require('http');
http.createServer(function (req, res) {
  console.log('request', req.path);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(7777);