import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

// Reusable locked card
const LockedCard = ({ title }) => (
  <div className="p-5 text-center bg-[#F7F7F7]">
    <h3 className="text-lg font-semibold text-[#22201F]">{title}</h3>
    <p className="text-gray-500 mt-2">Upgrade to unlock this feature.</p>
    <Link to="/pricing" className="mt-3 inline-block px-4 py-2
    bg-yellow text-black 
    hover:bg-transparent border-2 border-yellow duration-300 hover:scale-105">
      Upgrade Now
    </Link>
  </div>
);

const Dashboard = () => {
  const { user, logout } = useAuth();
  const isPaidUser = false;

  return (
    <div className="min-h-screen bg-white text-[#22201F] flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-[#F7F7F7] p-6 border-r border-gray-300 sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-8">Mission Movement</h2>
        <nav className="flex flex-col gap-4 text-sm font-semibold">
          <Link to="/dashboard" className="hover:text-yellow">🏠 Overview</Link>
          <Link to="/program" className="hover:text-yellow">📋 My Program</Link>
          <Link to="/schedule" className="hover:text-yellow">📆 Training Schedule</Link>
          <Link to="/check-in" className="hover:text-yellow">🧠 Check-In</Link>
          <Link to="/library" className="hover:text-yellow">📚 Video Library</Link>
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
        {/* Welcome */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.displayName || user.email}!</h1>
            <p className="text-sm text-gray-500 mt-1">Your journey starts here. Let's get to work.</p>
          </div>
          <FaUserCircle className="text-4xl text-yellow" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 bg-[#F7F7F7]">
            <h3 className="text-lg font-semibold">Your Program</h3>
            {isPaidUser ? (
              <p className="text-green-600 mt-2">✅ Access Granted!</p>
            ) : (
              <LockedCard title="Training Program" />
            )}
          </div>

          <div className="p-5 bg-[#F7F7F7]">
            <h3 className="text-lg font-semibold">Workout Tracker</h3>
            <p className="text-gray-500 mt-2">Coming soon...</p>
          </div>

          <div className="p-5 bg-[#F7F7F7]">
            <h3 className="text-lg font-semibold">Progress Overview</h3>
            <p className="text-gray-500 mt-2">Coming soon...</p>
          </div>

          {isPaidUser ? (
            <div className="p-5 bg-[#F7F7F7]">
              <h3 className="text-lg font-semibold">Schedule Check-In</h3>
              <p className="text-green-600 mt-2">✅ You can book your check-in!</p>
            </div>
          ) : (
            <LockedCard title="Schedule Check-In" />
          )}

          {isPaidUser ? (
            <div className="p-5 bg-[#F7F7F7]">
              <h3 className="text-lg font-semibold">Video Library</h3>
              <p className="text-green-600 mt-2">✅ Access to all training videos!</p>
            </div>
          ) : (
            <LockedCard title="Video Library" />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;