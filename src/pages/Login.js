import React, { useState } from "react";
import { auth } from "../firebase";
// Login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return user ? (
    <div className="text-center mt-20 text-white">Already logged in. Redirecting...</div>
  ) : (
    <form
      onSubmit={handleLogin}
      className="p-6 bg-gray-800 text-white rounded max-w-md mx-auto mt-20 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}

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
          Login
        </button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        New here?{" "}
        <RouterLink to="/signup" className="text-yellow hover:underline">
          Create an account
        </RouterLink>
      </div>
    </form>
  );
};

export default Login;
