var http = require("http");

var server = http.createServer(function (req, res) {
  console.log("Requested URL: " + req.url + "Method: " + req.method);
  if (req.url === "/home" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to ABC College!");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("About ABC College");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Page Not Found");
    res.end();
  }
});
server.listen(8080);
console.log("Server running on http://localhost:8080/");
