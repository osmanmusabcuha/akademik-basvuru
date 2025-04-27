import { create } from "zustand";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

export const useAuthStore = create((set) => ({
  user: storedUser || null,
  token: storedToken || null,
  isAuthenticated: !!storedUser && !!storedToken,

  setAuth: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set(() => {
      return {
        user,
        token,
        isAuthenticated: true,
      };
    });
  },

  clearAuth: () => {
    set({ user: null, token: null, isAuthenticated: false });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
}));
