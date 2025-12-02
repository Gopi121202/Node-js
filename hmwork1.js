let fullName = "Sarah Johnson";
let welcomeMsg = " Welcome to the new platform! Hope you enjoy your ";

let review = {
  name: fullName,
  comment: welcomeMsg,
};

function printMessage(reviewObj) {
  let firstCharc = reviewObj.name.charAt(0);

  let welMsge = reviewObj.comment.slice(0, 16);
  let welMsge2 = reviewObj.comment.substring(0, 16);
  let fullNameUpper = reviewObj.name.toUpperCase();
  console.log(`first Character is : ${firstCharc}`);
  console.log(`length of Welcome Message is: ${reviewObj.comment.length}`);
  console.log(`Your comment: "${welMsge}..."`);
  console.log(`Your comment using substring: "${welMsge2}..."`);
  console.log(`Your Full Name is ${fullNameUpper}`);
  let welcomeMsgeLower = reviewObj.comment.toLowerCase();
  console.log(`Welcome Message is ${welcomeMsgeLower}`);

  // FIXED LINE
  console.log(reviewObj.comment.trim());

  let fullNameSplit = reviewObj.name.split(" ");
  let firstName = fullNameSplit[0];
  let lastName = fullNameSplit[1];
  console.log(`First Name is ${firstName}`);
  console.log(`Last Name is ${lastName}`);

  let pos = reviewObj.comment.search("Welcome");
  console.log(`Position of 'Welcome' in comment is ${pos}`);
  let combined = firstName.concat(" ", welMsge);
  console.log(`Combined Msge is: ${combined}`);
}

printMessage(review);
