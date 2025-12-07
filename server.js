var http = require("http");

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.end();
});
server.listen(8080);
