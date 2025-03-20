import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
      <p className="mt-2">You are now logged in.</p>

      {/* Placeholder for future features like progress tracking */}
      <div className="mt-5 p-5 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Your Program</h2>
        <p className="text-gray-400">Here you will see your training plan, logs, and progress tracking.</p>
      </div>

      <button 
        onClick={logout} 
        className="mt-5 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
