import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth-form";
import { useAuth } from "../hook/useAuth";

export default function RegisterPage() {
  const { register, error } = useAuth();

  const navigate = useNavigate();
  const handleRegister = async (data) => {
    console.log("Kayıt yapılıyor:", data);
    const success = await register(data);
    if (success) {
      console.log("Kayıt başarılı");
      navigate("/login");
    } else {
      console.log("Kayıt başarısız");
    }
  };

  return (
    <AuthForm type="register" onSubmit={handleRegister} fetchError={error} />
  );
}
