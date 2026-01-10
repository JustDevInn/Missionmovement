// // server/server.js
// require("dotenv").config();
// const express = require("express");
// const app = express();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// // Route for creating a one-time Checkout session
// app.post("/create-checkout-session", async (req, res) => {
//   console.log("✅ /create-checkout-session endpoint hit");
//   console.log("🔑 Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // should NOT be undefined

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card", "ideal"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "eur",
//             product_data: {
//               name: "Mission Movement Access",
//               description: "One-time payment for lifetime program access",
//             },
//             unit_amount: 19900, // €0.10
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     console.log("✅ Stripe session created");
//     res.json({ url: session.url });
//   } catch (error) {
//     console.error("❌ Stripe error:", error); // add this!
//     res.status(500).json({ error: error.message });
//   }
// });


// // Start server
// const PORT = process.env.PORT || 4242;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");

// Firebase init
const serviceAccount = require("./serviceAccountKey.json"); // Make sure this exists
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Stripe webhook secret
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Use raw body for webhook route
app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  if (!endpointSecret) {
    console.error("❌ STRIPE_WEBHOOK_SECRET is not set; cannot verify webhook.");
    return res.status(500).send("Webhook secret not configured");
  }

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_email || session.customer_details?.email;
    const amountPaid = session.amount_total;

    if (!email) {
      console.error("❌ Missing customer email on checkout.session.completed");
      return res.status(200).send("Webhook received without customer email");
    }

    let accessLevel = "basic"; // default fallback

    if (amountPaid === 3900) accessLevel = "basic";
    else if (amountPaid === 7900) accessLevel = "standard";
    else if (amountPaid === 14900) accessLevel = "coaching";

    try {
      await db.collection("users").doc(email).set(
        {
          accessLevel,
          purchasedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log(`✅ Access '${accessLevel}' assigned to ${email}`);
    } catch (firestoreErr) {
      console.error("❌ Firestore write failed:", firestoreErr.message);
    }
  }

  res.status(200).send("✅ Webhook received");
});

// Allow JSON on other routes
app.use(cors());
app.use(express.json());

// Products
const PRODUCTS = {
  basic: {
    name: "Zelfstandig Traject",
    description: "Alleen toegang tot het 6-weekse PDF schema",
    amount: 3900,
  },
  standard: {
    name: "Volledig Programma",
    description: "Toegang tot 6 modules, app, PDF’s, video’s",
    amount: 7900,
  },
  coaching: {
    name: "Met Coaching",
    description: "Inclusief video-calls, WhatsApp & correcties",
    amount: 14900,
  },
};

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  console.log("✅ /create-checkout-session endpoint hit");

  const { productId } = req.body;
  const product = PRODUCTS[productId];

  if (!product) return res.status(400).json({ error: "Ongeldig product ID" });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "ideal"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    console.log("✅ Stripe sessie aangemaakt:", session.id);
    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
