import AuthForm from "../components/auth-form";
import { useAuth } from "../hook/useAuth";

export default function RegisterPage() {
  const { register, error } = useAuth();

  const handleRegister = async (data) => {
    console.log("Kayıt yapılıyor:", data);
    await register(data);
  };

  return (
    <AuthForm type="register" onSubmit={handleRegister} fetchError={error} />
  );
}
