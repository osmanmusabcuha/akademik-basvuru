import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 ">
      <Navbar />
      <div className="bg-[#f7f6f2] mb-5 rounded-b-4xl flex-grow">
        <main className="container mx-auto px-1 py-6 ">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
