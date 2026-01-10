// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PaidRoute = ({ children }) => {
//   const { user, hasPaid } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (!hasPaid) {
//     return <Navigate to="/pricing" />;
//   }

//   return children;
// };

// export default PaidRoute;

// components/AccessRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PaidRoute = ({ requiredLevels = [], children }) => {
  const { user, access, userRole, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" />;

  const level = access || userRole; // 🔑 Fallback to role if accessLevel is undefined

  if (!requiredLevels.includes(level)) {
    return <Navigate to="/pricing" />;
  }

  return children;
};

export default PaidRoute;
