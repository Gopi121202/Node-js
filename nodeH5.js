var http = require("http");

var server = http.createServer(function (req, res) {
  console.log("Requested URL: " + req.url + "Method: " + req.method);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to the Home Page!");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is a simple Node.js server.");
    res.end();
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Contact us at contact1002@example.com");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Page Not Found");
    res.end();
  }
});
server.listen(3000);
console.log("Server running on http://localhost:3000/");
