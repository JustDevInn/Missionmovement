// server/server.js
require("dotenv").config();
const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Route for creating a one-time Checkout session
app.post("/create-checkout-session", async (req, res) => {
  console.log("✅ /create-checkout-session endpoint hit");
  console.log("🔑 Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // should NOT be undefined

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Mission Movement Access",
              description: "One-time payment for lifetime program access",
            },
            unit_amount: 70, // €0.10
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    console.log("✅ Stripe session created");
    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe error:", error); // add this!
    res.status(500).json({ error: error.message });
  }
});


// Start server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
