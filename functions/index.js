const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const https = require("https");
const querystring = require("querystring");

const OUTLOOK_USER = functions.config().outlook.user;
const OUTLOOK_PASS = functions.config().outlook.pass;
const CAPTCHA_SECRET = functions.config().captcha && functions.config().captcha.secret;
const CAPTCHA_PROVIDER = (functions.config().captcha && functions.config().captcha.provider) || "hcaptcha";

const CAPTCHA_ENDPOINTS = {
  hcaptcha: { hostname: "hcaptcha.com", path: "/siteverify" },
  recaptcha: { hostname: "www.google.com", path: "/recaptcha/api/siteverify" },
};

/**
 * Verify CAPTCHA token with configured provider.
 * @param {string} token
 * @return {Promise<boolean>}
 */
function verifyCaptcha(token) {
  if (!CAPTCHA_SECRET) {
    return Promise.reject(new Error("CAPTCHA secret not configured"));
  }

  const endpoint = CAPTCHA_ENDPOINTS[CAPTCHA_PROVIDER] || CAPTCHA_ENDPOINTS.hcaptcha;
  const postData = querystring.stringify({
    secret: CAPTCHA_SECRET,
    response: token,
  });

  const options = {
    hostname: endpoint.hostname,
    path: endpoint.path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let raw = "";
      res.on("data", (chunk) => {
        raw += chunk;
      });
      res.on("end", () => {
        try {
          const payload = JSON.parse(raw);
          resolve(Boolean(payload.success));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

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
    if (req.method !== "POST") {
      return res.status(405).send({ success: false, message: "Method not allowed." });
    }

    const { name, email, subject, message } = req.body;
    const captchaToken = req.body && req.body.captchaToken;

    if (!name || !email || !subject || !message) {
      return res.status(400).send({ success: false, message: "Missing required fields." });
    }

    if (!captchaToken) {
      return res.status(400).send({ success: false, message: "Missing CAPTCHA token." });
    }

    try {
      const captchaOk = await verifyCaptcha(captchaToken);
      if (!captchaOk) {
        return res.status(400).send({ success: false, message: "CAPTCHA verification failed." });
      }
    } catch (error) {
      console.error("❌ CAPTCHA verification error:", error);
      return res.status(500).send({ success: false, message: "CAPTCHA verification error." });
    }

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
