import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-grow container mx-auto px-1 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
