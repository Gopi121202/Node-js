const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", function (name) {
  rl.question("Enter your review comment: ", function (comment) {
    let review = {
      name: name,
      comment: comment,
    };

    function printMessage(reviewObj) {
      let formatName = reviewObj.name.toUpperCase();
      let shortComment = reviewObj.comment.slice(0, 20);
      console.log(
        `Thank you, ${formatName}! Your comment: "${shortComment}..."`
      );
    }
    printMessage(review);

    rl.close();
  });
});
