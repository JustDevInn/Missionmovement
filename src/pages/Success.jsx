import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const markUserAsPaid = async () => {
      if (!user) return;
      try {
        await setDoc(
          doc(db, "users", user.uid),
          { hasPaid: true },
          { merge: true }
        );
        console.log("✅ User marked as paid in Firestore");
      } catch (error) {
        console.error("❌ Error updating Firestore:", error);
      }
    };

    markUserAsPaid();
  }, [user]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/dashboard");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-90px)] bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-6 py-16 font-primary">
      <div className="bg-[#1A1A1A] border border-green-500 px-8 py-10 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-400 text-5xl" />
        </div>
        <h1 className="text-yellow text-2xl font-secondary uppercase tracking-wider mb-4">
          Payment Successful
        </h1>
        <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
          Welcome to the Mission Movement dashboard. Your transformation begins
          now.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center justify-center gap-2 bg-yellow text-black font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition mb-4"
        >
          Go to Dashboard <FaArrowRight />
        </button>

        <p className="text-gray-500 text-xs">
          Redirecting in{" "}
          <span className="text-yellow font-semibold">{countdown}</span>{" "}
          seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;
