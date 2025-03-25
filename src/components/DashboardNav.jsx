import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaClipboardList,
  FaBrain,
  FaBook,
  FaLeaf,
  FaChartBar,
  FaComments,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const DashboardNav = ({ isCollapsed, setIsCollapsed }) => {
  const { logout, hasPaid } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const startX = useRef(null);

  const links = [
    { to: "/dashboard", label: "Overview", icon: <FaHome /> },
    {
      to: hasPaid ? "/trainingprogram" : "/pricing",
      label: "My Program",
      icon: <FaClipboardList />,
    },
    { to: "/tracker", label: "Training Schedule", icon: <FaCalendarAlt /> },
    {
      to: hasPaid ? "/check-in" : "/pricing",
      label: "Check-In",
      icon: <FaBrain />,
    },
    {
      to: hasPaid ? "/library" : "/pricing",
      label: "Library",
      icon: <FaBook />,
    },
    { to: "/nutrition", label: "Nutrition", icon: <FaLeaf /> },
    { to: "/progress", label: "Progress", icon: <FaChartBar /> },
    { to: "/messages", label: "Messages", icon: <FaComments /> },
    { to: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  // Mobile swipe gesture
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
      {/* Mobile toggle */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 bg-[#1E1E1E] border border-[#2A2A2A] rounded-full p-2 shadow"
      >
        <FaBars className="text-white hover:text-cyan-400 text-lg" />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#1E1E1E] border-r border-[#2A2A2A] sticky top-0 h-screen transition-all duration-300 ${
          isCollapsed ? "w-16 px-2" : "w-64 px-6"
        } py-6 text-white`}
      >
        <div className="flex items-center justify-between mb-6">
          {!isCollapsed && (
            <Link to="/dashboard">
              <h2 className="text-xl font-bold text-white">Mission</h2>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-400 hover:text-white transition"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-cyan-600 text-white font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-[#2A2A2A]"
                }`
              }
            >
              {link.icon}
              {!isCollapsed && link.label}
            </NavLink>
          ))}

          <button
            onClick={logout}
            className={`text-left text-red-400 hover:underline flex items-center gap-2 mt-4 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FaSignOutAlt /> {!isCollapsed && "Logout"}
          </button>
        </nav>
      </aside>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "bg-opacity-50 pointer-events-auto" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#1E1E1E] text-white p-6 shadow-lg transform transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-6 text-white">Mission</h2>

          <nav className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive
                      ? "bg-cyan-600 text-white font-semibold"
                      : "text-gray-400 hover:text-white hover:bg-[#2A2A2A]"
                  }`
                }
              >
                {link.icon} {link.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setIsMobileOpen(false);
                logout();
              }}
              className="text-left text-red-400 hover:underline flex items-center gap-2 mt-4"
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
