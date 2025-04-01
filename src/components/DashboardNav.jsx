import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaDownload,
  FaBrain,
  FaBook,
  FaLeaf,
  FaChartBar,
  FaStopwatch,
  FaComments,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

// ... all imports stay the same

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
      icon: <FaDownload />,
    },
    {
      to: hasPaid ? "/trainingschedule" : "/pricing",
      label: "Training Schedule",
      icon: <FaCalendarAlt />,
    },
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
    { to: "/stopwatch", label: "Stopwatch", icon: <FaStopwatch /> },
    { to: "/nutrition", label: "Nutrition", icon: <FaLeaf /> },
    { to: "/progress", label: "Progress", icon: <FaChartBar /> },
    { to: "/messages", label: "Messages", icon: <FaComments /> },
    { to: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  // Swipe logic unchanged
  useEffect(() => {
    const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
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
      drawer.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      drawer.addEventListener("touchmove", handleTouchMove, { passive: true });
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
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 bg-[#1E1E1E] border border-yellow rounded-full p-2 shadow"
      >
        <FaBars className="text-yellow text-lg" />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#101010] border-r border-[#2A2A2A] sticky top-0 h-screen transition-all duration-300 
        font-primary ${
          isCollapsed ? "w-16 px-2" : "w-64 px-6"
        } py-6 text-white`}
      >
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <Link to="/dashboard">
              <h2 className="text-yellow text-lg font-bold tracking-widest uppercase">
                Mission
              </h2>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-yellow hover:text-white transition"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-primary tracking-widest uppercase">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "text-yellow font-semibold border-l-4 border-yellow pl-2 bg-[#1A1A1A]"
                    : "text-gray-400 hover:text-yellow hover:bg-[#1A1A1A]"
                }`
              }
            >
              {link.icon}
              {!isCollapsed && link.label}
            </NavLink>
          ))}

          <button
            onClick={logout}
            className={`text-left text-red-400 hover:underline flex items-center gap-2 mt-6 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FaSignOutAlt /> {!isCollapsed && "Logout"}
          </button>
        </nav>
      </aside>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#101010] text-white font-primary p-6 shadow-lg transform transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4 text-2xl text-yellow hover:text-white"
          >
            <FaTimes />
          </button>

          <h2 className="text-yellow font-bold mb-6 tracking-widest uppercase">
            Mission
          </h2>

          <nav className="flex flex-col gap-4 text-sm font-primary tracking-widest uppercase">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive
                      ? "text-yellow font-semibold border-l-4 border-yellow pl-2 bg-[#1A1A1A]"
                      : "text-gray-400 hover:text-yellow hover:bg-[#1A1A1A]"
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
              className="text-left text-red-400 hover:underline flex items-center gap-2 mt-6"
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
