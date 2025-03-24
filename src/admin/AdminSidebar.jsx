// src/admin/AdminSidebar.jsx
import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaVideo,
  FaUpload,
  FaUsers,
  FaHome,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const AdminSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef();
  const touchStartX = useRef(null);

  const links = [
    { path: "/admin", label: "Dashboard", icon: <FaHome /> },
    { path: "/admin/upload", label: "Upload Video", icon: <FaUpload /> },
    { path: "/admin/manage-videos", label: "Manage Videos", icon: <FaVideo /> },
    { path: "/admin/manage-users", label: "Manage Users", icon: <FaUsers /> },
  ];

  // Gesture to close sidebar
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!touchStartX.current) return;
      const currentX = e.touches[0].clientX;
      const diff = touchStartX.current - currentX;

      if (diff > 50) {
        setIsMobileOpen(false);
        touchStartX.current = null;
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
        className={`hidden md:flex flex-col bg-white border-r sticky top-0 h-screen transition-all duration-300 ${
          isCollapsed ? "w-16 px-2" : "w-64 px-6"
        } py-6`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {!isCollapsed && (
            <Link to="/admin">
              <h2 className="text-xl font-bold">Admin Panel</h2>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-600 hover:text-black transition"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-yellow text-black font-semibold"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {!isCollapsed && link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/dashboard"
          className={`mt-auto text-sm text-blue-500 hover:underline ${
            isCollapsed ? "text-center mt-10" : "mt-10"
          }`}
        >
          ← {!isCollapsed && "Back to User Dashboard"}
        </Link>
      </aside>

      {/* Mobile Sidebar Drawer */}
  {/* Backdrop always rendered, fade controlled by opacity */}
<div
  className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 md:hidden ${
    isMobileOpen ? 'bg-opacity-50 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
  }`}
  onClick={() => setIsMobileOpen(false)}
>
  {/* Slide-in Drawer */}
  <div
    ref={drawerRef}
    className={`fixed top-0 right-0 h-full w-64 bg-white p-6 space-y-6 shadow-lg transform transition-transform duration-300 ${
      isMobileOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
    onClick={(e) => e.stopPropagation()}
  >

            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                      isActive
                        ? "bg-yellow text-black font-semibold"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`
                  }
                >
                  {link.icon} {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/dashboard"
              onClick={() => setIsMobileOpen(false)}
              className="block mt-10 text-sm text-blue-500 hover:underline"
            >
              ← Back to User Dashboard
            </Link>
          </div>
        </div>
    </>
  );
};

export default AdminSidebar;
