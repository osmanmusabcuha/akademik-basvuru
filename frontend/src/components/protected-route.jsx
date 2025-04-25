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

  return children;
};

export default ProtectedRoute;
