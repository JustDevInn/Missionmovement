// admin/AdminSidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaVideo, FaUpload, FaUsers, FaHome } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const links = [
    { path: "/admin", label: "Dashboard", icon: <FaHome /> },
    { path: "/admin/upload", label: "Upload Video", icon: <FaUpload /> },
    { path: "/admin/manage-videos", label: "Manage Videos", icon: <FaVideo /> },
    { path: "/admin/manage-users", label: "Manage Users", icon: <FaUsers /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-6 py-8 hidden md:block sticky top-0">
      <Link to="/admin">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      </Link>
      <nav className="flex flex-col gap-3 text-sm font-medium">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition ${
                isActive ? "bg-yellow text-black font-semibold" : "text-gray-700 hover:bg-yellow hover:text-black"
              }`
            }
          >
            {link.icon} {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-10 text-sm text-blue-500 hover:underline"
      >
        ← Back to User Dashboard
      </button>
    </aside>
  );
};

export default AdminSidebar;
