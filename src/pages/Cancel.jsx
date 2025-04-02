import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTimesCircle } from "react-icons/fa";

const Cancel = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/pricing");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-90px)] bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-6 py-16 font-primary">
      <div className="bg-[#1A1A1A] border border-red-500 px-8 py-10 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <FaTimesCircle className="text-red-500 text-5xl" />
        </div>
        <h1 className="text-yellow text-2xl font-secondary uppercase tracking-wider mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
          No worries — you can always return and complete your purchase when
          you're ready.
        </p>

        <Link
          to="/pricing"
          className="inline-flex items-center justify-center gap-2 bg-yellow text-black font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition mb-4"
        >
          <FaArrowLeft />
          Back to Pricing
        </Link>

        <p className="text-gray-500 text-xs">
          Redirecting to pricing in{" "}
          <span className="text-yellow font-semibold">{countdown}</span>{" "}
          seconds...
        </p>
      </div>
    </div>
  );
};

export default Cancel;
