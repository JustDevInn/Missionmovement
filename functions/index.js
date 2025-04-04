const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const OUTLOOK_USER = functions.config().outlook.user;
const OUTLOOK_PASS = functions.config().outlook.pass;

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: OUTLOOK_USER,
    pass: OUTLOOK_PASS,
  },
});

// ❗ No runWith here, just plain https.onRequest for 1st Gen
exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: `"Mission Movement" <${OUTLOOK_USER}>`,
      to: "peeters.justin@yahoo.com",
      subject: `📩 New Message: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).send({ success: true, message: "Email sent!" });
    } catch (error) {
      console.error("❌ Email send error:", error);
      return res.status(500).send({ success: false, message: "Failed to send email." });
    }
  });
});
