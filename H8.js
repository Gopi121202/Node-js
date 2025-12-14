var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
var path = require("path");
var nodemailer = require("nodemailer");

http
  .createServer((req, res) => {
    if (req.url === "/upload" && req.method.toLowerCase() === "post") {
      const form = formidable({
        uploadDir: path.join(__dirname, "uploads"),
        keepExtensions: true,
      });

      form.parse(req, (err, fields, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Error parsing the file upload.");
        }

        const file = files.myfile;
        const oldPath = file.filepath;
        const newPath = path.join(__dirname, "uploads", file.originalFilename);

        fs.rename(oldPath, newPath, async (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Error saving the file.");
          }

          try {
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "your_email@gmail.com",
                pass: "your_email_password",
              },
            });

            let mailOptions = {
              from: "your_email@gmail.com",
              to: "admin@example.com",
              subject: "File Uploaded",
              text: "A user uploaded a file to the support portal.",
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
      <h2>Tech Support File Upload</h2>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile"><br><br>
        <input type="submit" value="Upload File">
      </form>
    `);
    }
  })
  .listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
  });
