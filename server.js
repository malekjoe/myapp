const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, description } = req.body;

  // Configure the email transporter (using Gmail as an example)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  let mailOptions = {
    from: email,
    to: "malekjokhadar17@gmail.com",
    subject: `New message from ${name}`,
    text: description,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Failed to send email");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
