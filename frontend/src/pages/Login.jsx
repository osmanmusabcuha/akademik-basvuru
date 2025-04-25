import AuthForm from "../components/auth-form";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    const success = await login(data);

    if (success) {
      console.log("Giriş başarılı");
      navigate("/dashboard");
    } else {
      console.log("Giriş başarısız");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} fetchError={error} />;
}
