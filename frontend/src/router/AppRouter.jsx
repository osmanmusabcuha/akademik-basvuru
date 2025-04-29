import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NodFound.jsx";
import UnauthorizedPage from "../pages/Unauthorized.jsx";
import ManageRoles from "../pages/admin/ManageRoles.jsx";
import ManagePosting from "../pages/admin/ManagePosting.jsx";
import Posting from "../pages/applicant/Posting.jsx";
import Application from "../pages/applicant/Application.jsx";
import ApplicationDocuments from "../pages/applicant/ApplicationDocuments.jsx";
import AllApplications from "../pages/admin/AllApplications.jsx";
import ApplicationDetails from "../pages/admin/ApplicationDetails.jsx";
import Evaluations from "../pages/jury/Evaluations.jsx";
import EvaluationDetails from "../pages/jury/EvaluationDetails.jsx";
import Evaluation from "../pages/admin/Evaluation.jsx";

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
          path="manage-roles"
          element={
            <ProtectedRoute allowRoles={["admin"]}>
              <ManageRoles />
            </ProtectedRoute>
          }
        />
        <Route
          path="manage-postings"
          element={
            <ProtectedRoute allowRoles={["yonetici", "admin"]}>
              <ManagePosting />
            </ProtectedRoute>
          }
        />
        <Route
          path="postings"
          element={
            <ProtectedRoute allowRoles={["aday"]}>
              <Posting />
            </ProtectedRoute>
          }
        />
        <Route
          path="applications"
          element={
            <ProtectedRoute allowRoles={["aday"]}>
              <Application />
            </ProtectedRoute>
          }
        />
        <Route
          path="applications/:id/application-documents"
          element={
            <ProtectedRoute allowRoles={["aday"]}>
              <ApplicationDocuments />
            </ProtectedRoute>
          }
        />
        <Route
          path="all-applications"
          element={
            <ProtectedRoute allowRoles={["admin", "yonetici"]}>
              <AllApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="all-applications/:id"
          element={
            <ProtectedRoute allowRoles={["admin", "yonetici"]}>
              <ApplicationDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="all-applications/:id/evaluation"
          element={
            <ProtectedRoute allowRoles={["admin", "yonetici"]}>
              <Evaluation />
            </ProtectedRoute>
          }
        />
        <Route
          path="evaluations"
          element={
            <ProtectedRoute allowRoles={["juri"]}>
              <Evaluations />
            </ProtectedRoute>
          }
        />
        <Route
          path="evaluations/:id"
          element={
            <ProtectedRoute allowRoles={["juri"]}>
              <EvaluationDetails />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
