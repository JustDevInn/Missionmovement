import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, role } = useAuth();
  const allowedRoles = ["admin", "coach"];
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/dashboard" />;

  return children;
};

export default AdminRoute;
