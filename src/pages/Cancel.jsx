import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-[#22201F] px-4">
      <h1 className="text-3xl font-bold mb-4">❌ Payment Cancelled</h1>
      <p className="mb-6">No worries. You can always try again whenever you’re ready.</p>
      <Link
        to="/pricing"
        className="bg-yellow text-black px-6 py-3 rounded-md hover:bg-black hover:text-yellow transition"
      >
        Back to Pricing
      </Link>
    </div>
  );
};

export default Cancel;
