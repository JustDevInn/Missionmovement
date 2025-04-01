import React, { useState } from "react";
import Reviews from "../components/Reviews"; // Adjust if needed
import VideoPreview from "./VideoPreview";

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
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to payment service.");
      console.error(err);
      setError("Failed to connect to payment service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Access Purchase Section */}
      <div className="min-h-[calc(100vh-80px)] bg-[#121212] flex flex-col justify-center items-center px-6 md:px-10 text-center md:text-left">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex flex-col gap-8">
            {/* Testimonial */}
            <div className="animate-slide-in-left">
              <p className="italic text-gray-500 text-sm md:text-lg font-light max-w-md">
                "After following this program, I not only passed my selection —
                I became the strongest and most confident version of myself."
              </p>
              <p className="text-yellow text-xs md:text-sm mt-2 tracking-wider uppercase">
                – Former Marine Prep Client
              </p>
            </div>

            {/* Headline & Description */}
            <div className="space-y-4">
              <h1 className="h1 animate-fade-in">Unlock Full Access</h1>
              <p className="text-white text-sm md:text-base font-light font-primary max-w-md">
                Get lifetime access to all our training programs, video library,
                coaching features, and weekly check-ins.
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                One-time payment of{" "}
                <span className="text-yellow font-bold">€49.99</span>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="/img/bundle.png"
              alt="Military Preparation Program"
              className="w-[220px] md:w-[300px] shadow-md rounded"
            />
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-lg"
            >
              {loading ? "Processing..." : "purchase"}
            </button>

            {error && (
              <p className="text-red-400 font-secondary text-sm text-center">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Video Section */}
      <section className="w-full bg-[#101010] py-20 px-4 flex flex-col items-center justify-center">
        <h2 className="text-yellow text-xl md:text-3xl font-secondary tracking-widest uppercase mb-6 text-center">
          Preview the Training Experience
        </h2>
        <div className="w-full max-w-5xl md:h-[80vh] rounded-lg overflow-hidden">
          <VideoPreview />
        </div>
      </section>
      {/* Reviews */}
      <Reviews />
    </>
  );
};

export default PurchaseAccess;
