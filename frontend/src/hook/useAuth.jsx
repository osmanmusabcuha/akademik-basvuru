import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/auth-store";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setAuth, clearAuth, role } = useAuthStore();
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

  const register = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/sign-up`, formData);
      const { token, user } = response.data.data;
      console.log("response", response.data);
      console.log("token", { token }, "user", user);
      setAuth(user, token);
      console.log(role);
    } catch (err) {
      setError(err.response?.data?.message || "Kayıt işlemi başarısız.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/sign-in`, formData);
      const { token, user } = response.data.data;
      console.log("token", { token }, "user", user);
      setAuth(user, token);
      console.log(role);
    } catch (err) {
      setError(err.response?.data?.message || "Giriş işlemi başarısız.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearAuth();
  };

  return { register, login, error, loading, logout };
};
