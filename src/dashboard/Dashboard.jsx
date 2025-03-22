import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

// Locked feature card
const LockedCard = ({ title }) => (
  <div className="p-5 text-center bg-[#F7F7F7] border border-gray-300 rounded-md">
    <h3 className="text-lg font-semibold text-[#22201F]">{title}</h3>
    <p className="text-gray-500 mt-2">Upgrade to unlock this feature.</p>
    <Link
      to="/pricing"
      className="mt-3 inline-block px-4 py-2 bg-yellow text-black hover:bg-transparent border-2 border-yellow duration-300 hover:scale-105"
    >
      Upgrade Now
    </Link>
  </div>
);


const Dashboard = () => {
  const { user, logout, hasPaid } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);
  
  useEffect(() => {
    if (user) {
      // optional delay just to smooth out transition
      const timer = setTimeout(() => setLocalLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (localLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#22201F]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow border-t-transparent" />
      </div>
    );
  }
  return (
    
    <div className="min-h-screen bg-white text-[#22201F] flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-[#F7F7F7] p-6 border-r border-gray-300 sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-8">Mission Movement</h2>
        <nav className="flex flex-col gap-4 text-sm font-semibold">
          <Link to="/dashboard" className="hover:text-yellow">🏠 Overview</Link>
          <Link to={hasPaid ? "/trainingprogram" : "/pricing"} className="hover:text-yellow">📋 My Program</Link>
          <Link to="/tracker" className="hover:text-yellow">📆 Training Schedule</Link>
          <Link to={hasPaid ? "/check-in" : "/pricing"} className="hover:text-yellow">🧠 Check-In</Link>
          <Link to={hasPaid ? "/library" : "/pricing"} className="hover:text-yellow">📚 Video Library</Link>
          <Link to="/nutrition" className="hover:text-yellow">🥗 Nutrition</Link>
          <Link to="/progress" className="hover:text-yellow">📊 Progress</Link>
          <Link to="/messages" className="hover:text-yellow">💬 Messages</Link>
          <Link to="/settings" className="hover:text-yellow">⚙️ Settings</Link>
          <button onClick={logout} className="text-left text-red-500 hover:underline flex items-center gap-2 mt-4">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.displayName || user.email}!</h1>
            <p className="text-sm text-gray-500 mt-1">Your journey starts here. Let's get to work.</p>
          </div>
          <FaUserCircle className="text-4xl text-yellow" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Program */}
          {hasPaid ? (
            <Link to="/trainingprogram" className="p-5 bg-[#F7F7F7] border border-gray-300 rounded-md hover:bg-yellow hover:text-black transition">
              <h3 className="text-lg font-semibold">Your Program</h3>
              <p className="text-sm mt-2 text-gray-600">Click to view your plan</p>
            </Link>
          ) : (
            <LockedCard title="Training Program" />
          )}

          {/* Tracker (always open) */}
          <Link to="/tracker" className="p-5 bg-[#F7F7F7] border border-gray-300 rounded-md hover:bg-yellow hover:text-black transition">
            <h3 className="text-lg font-semibold">Workout Tracker</h3>
            <p className="text-sm mt-2 text-gray-600">Track your workouts</p>
          </Link>

          {/* Progress (always open) */}
          <Link to="/progress" className="p-5 bg-[#F7F7F7] border border-gray-300 rounded-md hover:bg-yellow hover:text-black transition">
            <h3 className="text-lg font-semibold">Progress Overview</h3>
            <p className="text-sm mt-2 text-gray-600">View your gains</p>
          </Link>

          {/* Check-In */}
          {hasPaid ? (
            <Link to="/check-in" className="p-5 bg-[#F7F7F7] border border-gray-300 rounded-md hover:bg-yellow hover:text-black transition">
              <h3 className="text-lg font-semibold">Schedule Check-In</h3>
              <p className="text-sm mt-2 text-gray-600">Book a call</p>
            </Link>
          ) : (
            <LockedCard title="Schedule Check-In" />
          )}

          {/* Library */}
          {hasPaid ? (
            <Link to="/library" className="p-5 bg-[#F7F7F7] border border-gray-300 rounded-md hover:bg-yellow hover:text-black transition">
              <h3 className="text-lg font-semibold">Video Library</h3>
              <p className="text-sm mt-2 text-gray-600">Explore resources</p>
            </Link>
          ) : (
            <LockedCard title="Video Library" />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
