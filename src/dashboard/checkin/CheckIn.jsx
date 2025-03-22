import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const CheckIn = () => {
  const { user, hasPaid } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;

  return (
    <div className="min-h-screen bg-white text-[#22201F] p-6">
      <h1 className="text-3xl font-bold mb-4">Check-In</h1>
      <p className="text-gray-600">This is where your training schedule or workout details will appear.</p>
    </div>
  );
};

export default CheckIn;