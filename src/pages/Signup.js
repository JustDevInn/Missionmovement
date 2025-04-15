import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setShowSpinner(false);

    if (!username.trim()) {
      setError("Please enter a username.");
      setLoading(false);
      return;
    }

    const spinnerTimeout = setTimeout(() => setShowSpinner(true), 300);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        displayName: username,
        email: userCredential.user.email,
        createdAt: serverTimestamp(),
        hasPaid: false,
        paymentInfo: {
          method: "Stripe",
          date: Timestamp.now(),
          amount: 39,
        },
        role: "user",
      });

      clearTimeout(spinnerTimeout);
      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err) {
      clearTimeout(spinnerTimeout);
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
      setLoading(false);
      setShowSpinner(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-[calc(100vh-90px)] flex items-center justify-center px-4 pt-24 sm:pt-0">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* 💬 Quote */}
        <p className="text-gray-400 text-center font-light text-sm tracking-wide max-w-xs leading-relaxed">
          <span className="italic text-white">
          "Discipline is doen wat gedaan moet worden, ook wanneer je er geen zin in hebt."
          </span>
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className="bg-[#1A1A1A] border border-yellow w-full rounded-xl px-8 py-8 shadow-lg"
        >
          <h2 className="text-yellow font-secondary text-3xl mb-6 tracking-wider uppercase text-center">
            Account aanmaken
          </h2>

          {error && (
            <p className="text-red-500 bg-red-900 bg-opacity-20 px-4 py-2 rounded text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Gebruikersnaam"
              className="w-full bg-[#121212] text-white placeholder-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-yellow transition"
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="w-full bg-[#121212] text-white placeholder-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-yellow transition"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Wachtwoord"
    autoComplete="new-password" // for signup — change to "current-password" for login
    className="w-full bg-[#121212] text-white placeholder-gray-400 px-4 py-3 pr-10 rounded-md outline-none focus:ring-2 focus:ring-yellow transition"
    onChange={(e) => setPassword(e.target.value)}
    disabled={loading}
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

          </div>

          <div className="mt-6">
            {showSpinner ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow text-black font-semibold py-3 w-full rounded-md hover:bg-opacity-90 transition tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Creëer account
              </button>
            )}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Heb je al een account?{" "}
            <RouterLink to="/login" className="text-yellow hover:underline">
              Log in
            </RouterLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
