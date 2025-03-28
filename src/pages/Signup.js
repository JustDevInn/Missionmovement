import React, { useState } from "react";
import { auth, db } from "../firebase"; // ✅ make sure db is here
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Set displayName in Firebase Auth
      try {
        await updateProfile(userCredential.user, {
          displayName: username,
        });
      } catch (profileErr) {
        console.warn("Display name could not be set:", profileErr.message);
      }

      // ✅ Write to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        displayName: username,
        email: userCredential.user.email,
        createdAt: serverTimestamp(),
        hasPaid: false,
        paymentInfo: {
          method: "Stripe",
          date: Timestamp,
          amount: 39
        },
        role: "user",
      });

      // ✅ Delay redirect slightly to ensure context has synced
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (err) {
      console.error("Signup error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Try logging in instead.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else {
        setError("Failed to create account. Try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="p-6 bg-gray-800 text-white rounded max-w-md mx-auto mt-20 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 my-2 rounded bg-gray-900"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 my-2 rounded bg-gray-900"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 my-2 rounded bg-gray-900"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-4">
        <button className="bg-yellow text-black p-2 rounded w-full font-semibold">
          Sign Up
        </button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <RouterLink to="/login" className="text-yellow hover:underline">
          Log in
        </RouterLink>
      </div>
    </form>
  );
};

export default Signup;
