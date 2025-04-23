import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-green-500 py-4 px-2 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center space-x-1">
          <span className="ml-2">Akademik Başvuru Sistemi</span>
        </Link>

        <div className="flex space-x-4 items-center">
          <>
            <Link
              to="/login"
              className="px-4 border border-white hover:border-green-500 hover:py-2 rounded"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="px-4 border border-green-500 bg-green-500 py-2 text-white hover:bg-green-200 hover:text-green-700 rounded"
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
