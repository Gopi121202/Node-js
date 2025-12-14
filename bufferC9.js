var buf1 = new Buffer.from("NodeJS is fast");
var buf2 = buf1.slice(0, 7);
console.log(buf2.toString());
var buf3 = new Buffer.from("Powerful");
console.log(buf3.toString());
var result = buf2.compare(buf3);
if (result === 0) {
  console.log(buf2 + "is same as" + buf3);
} else if (result < 0) {
  console.log(buf2 + "is before" + buf3);
} else {
  console.log(buf2 + "is after" + buf3);
}

var json = buf2.toJSON();
console.log(json);
