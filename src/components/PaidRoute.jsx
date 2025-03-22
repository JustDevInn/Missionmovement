import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PaidRoute = ({ children }) => {
  const { user, hasPaid } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPaid) {
    return <Navigate to="/pricing" />;
  }

  return children;
};

export default PaidRoute;
