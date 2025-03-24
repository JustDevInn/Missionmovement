// src/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-white text-[#22201F]">
      <DashboardNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="flex-1 transition-all duration-300 w-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
