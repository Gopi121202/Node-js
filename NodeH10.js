const fs = require("fs");

const introStream = fs.createReadStream("intro.txt");
const conclusionStream = fs.createReadStream("conclusion.txt");

let introBuffer = Buffer.alloc(0);
let conclusionBuffer = Buffer.alloc(0);

introStream.on("data", (chunk) => {
  introBuffer = Buffer.concat([introBuffer, chunk]);
});

conclusionStream.on("data", (chunk) => {
  conclusionBuffer = Buffer.concat([conclusionBuffer, chunk]);
});

let introDone = false;
let conclusionDone = false;

introStream.on("end", () => {
  introDone = true;
  if (introDone && conclusionDone) mergeFiles();
});

conclusionStream.on("end", () => {
  conclusionDone = true;
  if (introDone && conclusionDone) mergeFiles();
});

function mergeFiles() {
  const fullBuffer = Buffer.concat([introBuffer, conclusionBuffer]);

  const writeStream = fs.createWriteStream("full_report.txt");
  writeStream.write(fullBuffer);
  writeStream.end();

  writeStream.on("finish", () => {
    console.log("Merging complete!");
  });
}
