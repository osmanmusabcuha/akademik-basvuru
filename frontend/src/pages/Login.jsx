import { useNavigate } from "react-router-dom";
import { useState } from "react";

const fakeUsers = [
  { email: "aday@site.com", password: "1234", role: "aday" },
  { email: "juri@site.com", password: "1234", role: "juri" },
  { email: "admin@site.com", password: "1234", role: "admin" },
  { email: "super@site.com", password: "1234", role: "superadmin" },
  { email: "aday@site.com", password: "1234", role: "aday" },
  { email: "juri@site.com", password: "1234", role: "juri" },
  { email: "admin@site.com", password: "1234", role: "admin" },
  { email: "super@site.com", password: "1234", role: "superadmin" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Giriş başarılı → role'a göre yönlendir
      switch (user.role) {
        case "aday":
          navigate("/applicant/dashboard");
          break;
        case "juri":
          navigate("/jury/dashboard");
          break;
        case "admin":
          navigate("/admin/panel");
          break;
        case "superadmin":
          navigate("/superadmin/control");
          break;
      }
    } else {
      alert("E-posta veya şifre hatalı!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center">Giriş Yap</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
