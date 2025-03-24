import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const DashboardNav = ({ isCollapsed, setIsCollapsed }) => {
  const { logout, hasPaid } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { to: "/dashboard", label: "Overview", icon: "🏠" },
    { to: hasPaid ? "/trainingprogram" : "/pricing", label: "My Program", icon: "📋" },
    { to: "/tracker", label: "Training Schedule", icon: "📆" },
    { to: hasPaid ? "/check-in" : "/pricing", label: "Check-In", icon: "🧠" },
    { to: hasPaid ? "/library" : "/pricing", label: "Library", icon: "📚" },
    { to: "/nutrition", label: "Nutrition", icon: "🥗" },
    { to: "/progress", label: "Progress", icon: "📊" },
    { to: "/messages", label: "Messages", icon: "💬" },
    { to: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white border border-gray-300 rounded-full p-2 shadow"
      >
        <FaBars className="text-gray-700 text-lg" />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#F7F7F7] border-r border-gray-300 sticky top-0 h-screen transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Collapse/Expand Toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          {!isCollapsed && <h2 className="text-lg font-bold">Mission</h2>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-600 hover:text-black transition"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-sm font-semibold px-4 mt-6">
          {navLinks.map(({ to, label, icon }) => (
            <Link key={to} to={to} className="hover:text-yellow">
              {icon} {!isCollapsed && label}
            </Link>
          ))}
          <button
            onClick={logout}
            className={`text-left text-red-500 hover:underline flex items-center gap-2 mt-4 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FaSignOutAlt /> {!isCollapsed && "Logout"}
          </button>
        </nav>
      </aside>

      {/* Mobile Sidebar Drawer */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-6">Mission</h2>
            <nav className="flex flex-col gap-4 text-sm font-semibold">
              {navLinks.map(({ to, label, icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMobileOpen(false)}
                  className="hover:text-yellow"
                >
                  {icon} {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  logout();
                }}
                className="text-left text-red-500 hover:underline flex items-center gap-2 mt-4"
              >
                <FaSignOutAlt /> Logout
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardNav;
