import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed ? "w-16" : "w-64";

  return (
    <div className="admin-dark-theme flex min-h-screen relative">
      {/* Desktop Sidebar */}
      <div className={`hidden md:block ${sidebarWidth}`}>
        <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content */}
      <div className="flex-1 pt-20 sm:pt-20">
        <main className="p-4 sm:px-6 sm:py-8">
          <div className="bg-[#121212] border border-[#2A2A2A] shadow-md rounded-xl p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
