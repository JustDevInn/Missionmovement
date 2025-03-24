import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#22201F] relative">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="md:ml-64 transition-all duration-300 pt-20 sm:pt-20">
        <main className="p-4 sm:px-6 sm:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;