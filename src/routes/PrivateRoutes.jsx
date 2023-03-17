import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const currentUser = false;
  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};
