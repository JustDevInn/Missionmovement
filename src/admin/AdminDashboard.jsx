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
        <AdminSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <AdminSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="p-0 h-full px-6 pt-16">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
