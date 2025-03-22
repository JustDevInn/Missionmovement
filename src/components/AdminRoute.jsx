import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, isAdmin } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/dashboard" />;

  return children;
};

export default AdminRoute;
