import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  user: {
    plan: 'none' | 'Basic' | 'Gold' | 'Diamond';
  } | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  // console.log("User plan:", user.plan);
  // if (user.plan === 'none') {
  //   return <Navigate to="/manage-subscription" replace />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
