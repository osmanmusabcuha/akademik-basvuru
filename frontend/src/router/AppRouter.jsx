import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Ana sayfa */}
        <Route path="login" element={<Login />} /> {/* Giriş sayfası */}
        <Route path="register" element={<Register />} /> {/* Kayıt sayfası */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
