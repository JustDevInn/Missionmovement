import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

// Placeholder for locked content
const LockedContent = ({ title }) => (
  <div className="p-5 border border-gray-700 rounded-lg text-center bg-gray-800">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-400 mt-2">Upgrade to unlock this feature.</p>
    <Link to="/pricing" className="mt-3 inline-block px-4 py-2 bg-yellow text-black rounded-md">
      Upgrade Now
    </Link>
  </div>
);

const Dashboard = () => {
  const { user, logout } = useAuth();

  // Simulate user access (Replace this with actual payment verification later)
  const isPaidUser = false; // Change to true for testing unlocked content

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-yellow">Welcome, {user?.email}!</h1>
      <p className="mt-2">Your journey starts here. Let's get to work.</p>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        
        {/* Your Program */}
        <div className="p-5 border border-gray-700 rounded-lg bg-gray-800">
          <h3 className="text-lg font-semibold">Your Program</h3>
          {isPaidUser ? (
            <p className="text-green-400 mt-2">✅ Access Granted!</p>
          ) : (
            <LockedContent title="Training Program" />
          )}
        </div>

        {/* Workout Tracker (Placeholder) */}
        <div className="p-5 border border-gray-700 rounded-lg bg-gray-800">
          <h3 className="text-lg font-semibold">Workout Tracker</h3>
          <p className="text-gray-400 mt-2">Coming soon...</p>
        </div>

        {/* Progress Overview (Placeholder) */}
        <div className="p-5 border border-gray-700 rounded-lg bg-gray-800">
          <h3 className="text-lg font-semibold">Progress Overview</h3>
          <p className="text-gray-400 mt-2">Coming soon...</p>
        </div>

        {/* Schedule Check-In (Locked) */}
        {isPaidUser ? (
          <div className="p-5 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="text-lg font-semibold">Schedule Check-In</h3>
            <p className="text-green-400 mt-2">✅ You can book your check-in!</p>
          </div>
        ) : (
          <LockedContent title="Schedule Check-In" />
        )}

        {/* Library (Locked) */}
        {isPaidUser ? (
          <div className="p-5 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="text-lg font-semibold">Video Library</h3>
            <p className="text-green-400 mt-2">✅ Access to all training videos!</p>
          </div>
        ) : (
          <LockedContent title="Video Library" />
        )}
      </div>

      {/* Logout Button */}
      <button 
        onClick={logout} 
        className="mt-6 px-6 py-2 bg-red-500 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
