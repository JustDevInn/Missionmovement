import React, { useState } from "react";

const PurchaseAccess = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // 🔁 Redirect to Stripe Checkout
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to payment service.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-4 text-[#22201F]">Upgrade to Full Access</h2>
      <p className="text-gray-600 mb-6 max-w-md text-center">
        Unlock all training programs, check-ins, video library, and more.
      </p>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-yellow text-black px-6 py-3 rounded-md font-semibold hover:scale-105 duration-300 border-2 border-yellow hover:bg-transparent"
      >
        {loading ? "Processing..." : "Buy Lifetime Access – €49.99"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PurchaseAccess;
