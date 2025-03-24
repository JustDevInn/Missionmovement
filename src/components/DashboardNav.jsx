import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const DashboardNav = ({ isCollapsed, setIsCollapsed }) => {
  const { logout, hasPaid } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const startX = useRef(null);

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

  useEffect(() => {
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!startX.current) return;
      const deltaX = startX.current - e.touches[0].clientX;
      if (deltaX > 50) {
        setIsMobileOpen(false);
        startX.current = null;
      }
    };

    const drawer = drawerRef.current;
    if (drawer) {
      drawer.addEventListener("touchstart", handleTouchStart);
      drawer.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (drawer) {
        drawer.removeEventListener("touchstart", handleTouchStart);
        drawer.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-full p-2 shadow"
      >
        <FaBars className="text-gray-700 text-lg" />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#F7F7F7] border-r border-gray-300 sticky top-0 h-screen transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
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

      {/* Mobile Sidebar Drawer (animated with gesture support) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "bg-black bg-opacity-50 pointer-events-auto" : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white p-6 space-y-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
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
    </>
  );
};

export default DashboardNav;
