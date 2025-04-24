import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const schema = z.object({
  tcNo: z
    .string()
    .length(11, { message: "TC kimlik numarası 11 haneli olmalıdır." })
    .regex(/^\d+$/, {
      message: "TC kimlik numarası sadece rakamlardan oluşmalıdır.",
    }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
  name: z.string().optional(),
  surname: z.string().optional(),
  email: z
    .string()
    .email({ message: "Geçerli bir e-posta adresi girin." })
    .optional(),
  birthYear: z
    .string()
    .regex(/^\d{4}$/, { message: "Doğum yılı 4 haneli olmalıdır." })
    .optional(),
});

export default function AuthForm({ type, onSubmit, fetchError }) {
  const isRegister = type === "register";
  const [formData, setFormData] = useState({
    tcNo: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [_, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = schema.safeParse(formData);
    if (!validation.success) {
      const errors = {};
      console.log("Form verileri:", formData);
      validation.error.errors.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      setError(errors);
      console.log("Hatalar:", errors);
    } else {
      setError({});
      onSubmit(formData);
      console.log("Form verileri:", formData);
      setSuccess("Başarıyla kaydedildi!");
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-10 sm:mt-20 rounded-none border-transparent shadow-none sm:rounded-xl sm:border sm:border-gray-200 sm:shadow-md bg-transparent">
      <CardHeader>
        <div
          className={`flex items-end justify-start w-full h-40 rounded space-x-4 ${"bg-green-500"}`}
        >
          <h2 className="text-white text-4xl font-bold p-2">
            {isRegister ? "Kayıt Ol" : "Giriş Yap"}
          </h2>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
          {isRegister && (
            <>
              <div>
                <label className="block mb-1">Kullanıcı Adı</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                {error.username && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.username}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-1">Soyad</label>
                <Input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                {error.surname && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.surname}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-1">E-posta</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                {error.email && (
                  <div className="text-red-500 text-sm mt-1">{error.email}</div>
                )}
              </div>
              <div>
                <label className="block mb-1">Doğum Yılı</label>
                <Input
                  type="text"
                  name="birthYear"
                  placeholder="YYYY"
                  minLength={4}
                  maxLength={4}
                  pattern="\d{4}"
                  value={formData.birthYear}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                {error.birthYear && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.dogumYili}
                  </div>
                )}
              </div>
            </>
          )}

          <div>
            <label className="block mb-1">TC</label>
            <Input
              type="text"
              minLength={11}
              maxLength={11}
              name="tcNo"
              value={formData.tcNo}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            {error.tcNo && (
              <div className="text-red-500 text-sm mt-1">{error.tc}</div>
            )}
          </div>

          <div>
            <label className="block mb-1">Şifre</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            {error.password && (
              <div className="text-red-500 text-sm mt-1">{error.password}</div>
            )}
          </div>
          <div>
            {fetchError && (
              <div className="text-red-500 text-sm mt-1">
                {fetchError == "Invalid credentials"
                  ? "Geçersiz kimlik bilgileri"
                  : fetchError == "Invalid TC No"
                  ? "TC kimlik numarası geçersiz"
                  : fetchError == "User already exists"
                  ? "Kullanıcı zaten mevcut"
                  : fetchError}
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`w-full ${"bg-green-500 hover:bg-green-600"}  text-white py-2 rounded `}
          >
            {isRegister ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="text-center">
          {isRegister ? (
            <p>
              Zaten bir hesabınız var mı?{" "}
              <a href="/login" className="text-green-600 hover:underline">
                Giriş yap
              </a>
            </p>
          ) : (
            <p>
              Hesabınız yok mu?{" "}
              <a href="/register" className="text-green-600 hover:underline">
                Kayıt ol
              </a>
            </p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
