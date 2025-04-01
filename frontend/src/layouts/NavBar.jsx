import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Akademik Başvuru
        </Link>

        <div>
          <>
            <Link to="/login" className="px-4">
              Giriş Yap
            </Link>
            <Link to="/register" className="px-4">
              Kayıt Ol
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
