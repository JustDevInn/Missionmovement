import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore";
import { Link as RouterLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
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
        accessLevel: "free",
        role: "user",
      });

      clearTimeout(spinnerTimeout);
      setTimeout(() => window.location.assign("/pricing"), 500);
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
    <div className="bg-mmPage min-h-[calc(100vh-90px)] flex items-center justify-center px-4 pt-24 sm:pt-0">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* 💬 Quote */}
        <p className="text-mmTextMuted text-center font-normal tracking-wide max-w-xs leading-relaxed text-base md:text-lg">
          <span className="text-mmText">
            "Maak een account aan of log in om dit product te kopen. Je account geeft je toegang tot de backoffice waar je het programma kunt volgen."
          </span>
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className="bg-mmSurface border border-mmBorder w-full rounded-2xl px-8 py-8 shadow-sm"
        >
          <h2 className="text-mmText font-display text-3xl mb-6 tracking-widest uppercase text-center">
            Account aanmaken
          </h2>

          {error && (
            <p className="text-red-500 bg-red-900 bg-opacity-20 px-4 py-2 rounded mb-4 text-center text-base md:text-lg">
              {error}
            </p>
          )}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Gebruikersnaam"
              className="w-full bg-mmSurface text-mmText placeholder-mmTextMuted px-4 py-3 rounded-md outline-none border border-mmBorder focus:ring-2 focus:ring-mmFocus transition"
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="w-full bg-mmSurface text-mmText placeholder-mmTextMuted px-4 py-3 rounded-md outline-none border border-mmBorder focus:ring-2 focus:ring-mmFocus transition"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Wachtwoord"
                autoComplete="new-password"
                className="w-full bg-mmSurface text-mmText placeholder-mmTextMuted px-4 py-3 pr-10 rounded-md outline-none border border-mmBorder focus:ring-2 focus:ring-mmFocus transition"
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-mmTextMuted hover:text-mmAccent"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

          </div>

          <div className="mt-6">
            {showSpinner ? (
              <div className="flex justify-center">
                <Spinner color="border-mmAccent" />
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="mm-btnPrimary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Creëer account
              </button>
            )}
          </div>

          <p className="text-center text-mmTextMuted mt-6 text-base md:text-lg">
            Heb je al een account?{" "}
            <RouterLink to="/login" className="text-mmAccent hover:underline">
              Log in
            </RouterLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
