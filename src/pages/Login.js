import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return user ? (
    <div>Already logged in. Redirecting...</div>
  ) : (
    <form onSubmit={handleLogin} className="p-6 bg-gray-800 text-white rounded max-w-md mx-auto mt-20">
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
      <button className="bg-yellow text-black p-2 rounded mt-3 w-full">
        Login
      </button>
    </form>
  );
};

export default Login;
