import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed ? "w-16" : "w-64";

  return (
    <div className="flex min-h-screen bg-[#F9F9F9] text-[#22201F] relative">
      {/* Desktop Sidebar */}
      <div className={`hidden md:block ${sidebarWidth}`}>
        <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Mobile Sidebar (still needs to be rendered for the toggle) */}
      <div className="md:hidden">
        <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content */}
      <div className="flex-1 pt-20 sm:pt-20">
        <main className="p-4 sm:px-6 sm:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
