var http = require("http");
var url = require("url");
var fs = require("fs");
var events = require("events");
var eventemitter = new events.EventEmitter();

eventemitter.on("Page Viewed", function (page) {
  console.log("Page Viewed: " + page);
});

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
        console.log("404 Error - Page Not Found: " + filename);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
        console.log("200 OK - Page Served: " + filename);
        eventemitter.emit("Page Viewed", filename);
      }
    });
  })
  .listen(8080);
