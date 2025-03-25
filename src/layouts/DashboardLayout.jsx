import React, { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 relative">
      {/* Sidebar + Content */}
      <div className="flex">
        <DashboardNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className="flex-1 transition-all duration-300 w-full px-4 sm:px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
