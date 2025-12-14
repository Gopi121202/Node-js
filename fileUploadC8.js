var formidable = require("formidable");
var http = require("http");
var fs = require("fs");
var path = require("path");
var nodemailer = require("nodemailer");

var server = http.createServer((req, res) => {
  if (req.url === "/upload" && req.method.toLowerCase() === "post") {
    var form = formidable({
      uploadDir: path.join(__dirname, "uploads"),
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("An error occurred during file upload");
      }

      var file = files.myfile;
      var oldPath = file.filepath;
      var newPath = path.join(__dirname, "uploads", file.originalFilename);

      fs.rename(oldPath, newPath, async (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Error saving the file");
        }

        try {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "your_email@gmail.com",
              pass: "your_email_password", // use env vars in real apps
            },
          });

          let mailOptions = {
            from: "your_email@gmail.com",
            to: "friend_email@gmail.com",
            subject: "File Upload Successful",
            text:
              "A file named " +
              file.originalFilename +
              " has been uploaded successfully.",
          };

          await transporter.sendMail(mailOptions);

          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("File uploaded and email sent successfully!");
        } catch (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error sending email.");
        }
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile"><br>
        <input type="submit" value="Upload File">
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
