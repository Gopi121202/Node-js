module.exports = function () {
  var user = require("./userInfo.js");
  var name = user.name.split(" ");
  var firstName =
    name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
  var lastName =
    name[1].charAt(0).toUpperCase() + name[1].slice(1).toLowerCase();
  return console.log(firstName + " " + lastName);
};
