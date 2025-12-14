var managerInfo = require("./managerInfoH4");
var capitalizeName = require("./capitalizeNameH4");
var capName = capitalizeName(managerInfo.name);
console.log("Manager Name: " + capName);

var roleUpper = managerInfo.role.toUpperCase();
console.log("Role: " + roleUpper);

var roleLength = managerInfo.role.length;
console.log("Length of role: " + roleLength);

var searchString = managerInfo.role.search("inventory");
console.log("Position of 'inventory' : " + searchString);
console.log(__dirname);
console.log(__filename);
