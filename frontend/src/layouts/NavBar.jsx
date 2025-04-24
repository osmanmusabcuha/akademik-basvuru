import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" py-4 px-2 border-b bg-[#f7f6f2] border-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center space-x-1">
          <span className="ml-2">Akademik Başvuru Sistemi</span>
        </Link>

        <div className="flex space-x-4 items-center">
          <>
            <Link
              to="/login"
              className="px-4 border border-[#f7f6f2] hover:text-green-500"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="px-4 border border-green-500 bg-green-500 py-2 text-white hover:bg-green-600 hover:border-green-600 rounded"
            >
              Kayıt Ol
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
