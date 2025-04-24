import { create } from "zustand";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

export const useAuthStore = create((set) => ({
  user: storedUser || null,
  token: storedToken || null,
  role: storedUser?.role || null,
  isAuthenticated: !!storedUser && !!storedToken,

  setAuth: (user, token) => {
    set({ user, token, isAuthenticated: true });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  },

  clearAuth: () => {
    set({ user: null, token: null, isAuthenticated: false });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
}));
