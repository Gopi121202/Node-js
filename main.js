var output = require("./formatName.js");
var user = require("./userInfo.js");
console.log(output());
var hobbyUpper = user.hobby.toUpperCase();
console.log("Hobby is: " + hobbyUpper);
var hobbyLen = user.hobby.length;
console.log("Length of hobby string is: " + hobbyLen);
