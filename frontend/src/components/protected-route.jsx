import React, { useEffect } from "react";
import { useAuthStore } from "../store/auth-store.jsx";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowRoles }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !allowRoles.includes(user.role)) {
      navigate("/unauthorized");
    }
  }, [user, allowRoles, navigate]);

  return user && allowRoles.includes(user.role) ? (
    <>{children}</>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  );
};

export default ProtectedRoute;
