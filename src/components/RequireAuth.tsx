import React from "react";
import { useAuth } from "../context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface RequireAuthProps {
  allowedRoles: string[];
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate
      to="/unauthorized"
      state={{ from: location }}
      replace
    />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};
