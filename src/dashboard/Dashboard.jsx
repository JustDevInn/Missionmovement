import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

// Locked feature card
const LockedCard = ({ title }) => (
  <div className="p-5 text-center bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2 text-sm">Upgrade to unlock this feature.</p>
    <Link
      to="/pricing"
      className="mt-4 inline-block px-4 py-2 bg-yellow text-black font-semibold rounded hover:bg-yellow-400 hover:scale-[1.02] transition"
    >
      Upgrade Now
    </Link>
  </div>
);

const Dashboard = () => {
  const { user, hasPaid } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => setLocalLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (localLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-gray-200">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="px-4 pt-6 pb-10 md:p-6 text-gray-200 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome, {user.displayName || user.email}!
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Your journey starts here. Let's get to work.
          </p>
        </div>
        <FaUserCircle className="text-4xl text-yellow self-start sm:self-center" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {hasPaid ? (
          <Link to="/trainingprogram" className="p-5 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:bg-yellow hover:text-black transition">
            <h3 className="text-lg font-semibold">Your Program</h3>
            <p className="text-sm mt-2 text-gray-400">Click to view your plan</p>
          </Link>
        ) : (
          <LockedCard title="Training Program" />
        )}

        <Link to="/tracker" className="p-5 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:bg-yellow hover:text-black transition">
          <h3 className="text-lg font-semibold">Workout Tracker</h3>
          <p className="text-sm mt-2 text-gray-400">Track your workouts</p>
        </Link>

        <Link to="/progress" className="p-5 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:bg-yellow hover:text-black transition">
          <h3 className="text-lg font-semibold">Progress Overview</h3>
          <p className="text-sm mt-2 text-gray-400">View your gains</p>
        </Link>

        {hasPaid ? (
          <Link to="/check-in" className="p-5 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:bg-yellow hover:text-black transition">
            <h3 className="text-lg font-semibold">Schedule Check-In</h3>
            <p className="text-sm mt-2 text-gray-400">Book a call</p>
          </Link>
        ) : (
          <LockedCard title="Schedule Check-In" />
        )}

        {hasPaid ? (
          <Link to="/library" className="p-5 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:bg-yellow hover:text-black transition">
            <h3 className="text-lg font-semibold">Video Library</h3>
            <p className="text-sm mt-2 text-gray-400">Explore resources</p>
          </Link>
        ) : (
          <LockedCard title="Video Library" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
