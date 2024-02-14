import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
const app = express();
const PORT = process.env.PORT || 8080;
import nodemailer from "nodemailer";

//mail transporter
const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dntranth27@gmail.com",
    pass: "tyvy qnlz knxc pizh",
  },
});

//multer upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "my-upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use("/my-upload", express.static("my-upload"));

app.get("/", (req, res) => res.send({ status: "200", message: "OK" }));

app.post("/send-email", upload.array("files"), (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  console.log("files", req.files);
  const files = req.files;
  let mailOptions = {
    from: email,
    to: "dntranth27@gmail.com, duyen.th.tran@gmail.com",
    subject: subject,
    html: `<h1>This message comes from the portfolio website</h1>
            <p>Email: ${email}</p> 
            <p>Name: ${name}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>`,
    attachments: files
      ? files.map((file) => ({
          filename: file.filename,
          path: file.path,
        }))
      : [],
  };

  //sending email
  sender.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({ status: 400, message: error.message });
    } else {
      res.send({
        status: 200,
        message: `Email sent successfully.
                  Thank you for your considering. I'll get back to you soon. `,
      });
    }
  });
});

app.listen(PORT, () => console.log(`server's listenning on port ${PORT}...`));
