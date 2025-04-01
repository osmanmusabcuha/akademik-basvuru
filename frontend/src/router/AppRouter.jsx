import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import { SuperAdminControl } from "../pages/superadmin/SuperAdminControl";
import { ApplicantDashboard } from "../pages/applicant/ApplicantDashboard";
import { JuryDashboard } from "../pages/jury/JuryDashboard";
import { AdminPanel } from "../pages/admin/AdminDashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Ana sayfa */}
        <Route path="login" element={<Login />} /> {/* Giriş sayfası */}
        {/* Dashboard Sayfaları */}
        <Route path="applicant/dashboard" element={<ApplicantDashboard />} />
        <Route path="jury/dashboard" element={<JuryDashboard />} />
        <Route path="admin/panel" element={<AdminPanel />} />
        <Route path="superadmin/control" element={<SuperAdminControl />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
