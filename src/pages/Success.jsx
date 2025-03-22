import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Success.jsx
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Success = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

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

  return (
    <div className="min-h-screen flex items-center justify-center text-center text-green-600">
      <div>
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p className="mt-2 text-gray-600">Welcome to your training journey!</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-4 py-2 bg-yellow text-black rounded hover:bg-black hover:text-yellow transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Success;
