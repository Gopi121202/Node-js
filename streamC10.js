var fs = require("fs");
var data = "Books are a uniquely portable magic.";

var wrStream = fs.createWriteStream("book.txt");

wrStream.write(data, "UTF8");

wrStream.end();

var rdStream = fs.createReadStream("book.txt");

wrStream.on("finish", function () {
  console.log(data);
  console.log("Writing has completed.");
});

rdStream.on("data", function (chunk) {
  data += chunk;
});
rdStream.on("end", function () {
  console.log(" Reading is completed.");
});
rdStream.on("error", function (err) {
  console.log(err.stack);
});
wrStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("Program has Ended");
