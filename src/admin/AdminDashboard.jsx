import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen flex bg-[#F9F9F9] text-[#22201F]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;