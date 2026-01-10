import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setShowSpinner(false);

    // Delay to prevent flicker
    const spinnerDelay = setTimeout(() => {
      setShowSpinner(true);
    }, 300);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      clearTimeout(spinnerDelay);
      navigate("/dashboard");
    } catch (err) {
      clearTimeout(spinnerDelay);
      setError("Invalid email or password.");
      setLoading(false);
      setShowSpinner(false);
    }
  };

  return user ? (
    <div className="text-center mt-32 text-white text-xl">
      Je bent al ingelogd. We verwijzen je nu...
    </div>
  ) : (
    <div className="min-h-[calc(100vh-90px)] bg-[#0a0a0a] flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#1A1A1A] border border-yellow w-full max-w-md rounded-xl px-8 py-10 shadow-lg"
      >
        <h2 className="text-yellow font-secondary text-3xl mb-6 tracking-wider uppercase text-center">
          Log in
        </h2>

        {error && (
          <p className="text-red-500 bg-red-900 bg-opacity-20 px-4 py-2 rounded mb-4 text-center text-base md:text-lg">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#121212] text-white placeholder-gray-400 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-yellow transition"
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
         <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    autoComplete="new-password" // for signup - change to "current-password" for login
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
              Log in
            </button>
          )}
        </div>

        <p className="text-center text-gray-400 mt-6 text-base md:text-lg">
          Niew hier?{" "}
          <RouterLink to="/signup" className="text-yellow hover:underline">
          Creëer een account
          </RouterLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
