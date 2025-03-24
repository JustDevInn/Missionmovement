// src/admin/AdminDashboard.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F9F9F9] text-[#22201F]">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className="flex-1 p-6 transition-all duration-300"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
