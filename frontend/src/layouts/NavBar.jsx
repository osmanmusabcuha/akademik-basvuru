import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Kullanıcı bilgisini al

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Akademik Başvuru
        </Link>

        <div>
          {user ? (
            <>
              <span className="mr-4">Merhaba, {user.name}</span>
              <button
                onClick={() => dispatch(logout())}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4">
                Giriş Yap
              </Link>
              <Link to="/register" className="px-4">
                Kayıt Ol
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
