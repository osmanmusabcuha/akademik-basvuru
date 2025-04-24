import AuthForm from "../components/auth-form";
import { useAuth } from "../hook/useAuth";

export default function Login() {
  const { login, error } = useAuth();

  const handleLogin = async (data) => {
    console.log("Giriş yapılıyor:", data);
    await login(data);
  };

  return <AuthForm type="login" onSubmit={handleLogin} fetchError={error} />;
}
