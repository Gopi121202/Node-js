const fs = require("fs");
const path = require("path");

let buf1 = Buffer.from("Node.js buffers are powerful");

buf1.write("FAST ");

let buf2 = Buffer.from(" and flexible!");

let finalBuffer = Buffer.concat([buf1, buf2]);

let finalString = finalBuffer.toString();

let filePath = path.join(__dirname, "buffer_output.txt");
fs.writeFileSync(filePath, finalString);

console.log("File saved at:", filePath);
