import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NodFound.jsx";
import UnauthorizedPage from "../pages/Unauthorized.jsx";
import Users from "../pages/admin/Users.jsx";
import Posting from "../pages/Posting.jsx";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/protected-route.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Ana sayfa */}
        <Route path="login" element={<Login />} /> {/* Giriş sayfası */}
        <Route path="register" element={<Register />} /> {/* Kayıt sayfası */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            <ProtectedRoute allowRoles={["juri", "aday", "yonetici", "admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="users"
          element={
            <ProtectedRoute allowRoles={["admin"]}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="postings"
          element={
            <ProtectedRoute allowRoles={["aday", "yonetici", "admin"]}>
              <Posting />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
