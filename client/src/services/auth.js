import axios from "axios";

export const login = async (body) =>
  axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, body, {
    withCredentials: true,
  });

export const logout = async () =>
  axios.delete(`${import.meta.env.VITE_API_URL}/api/auth/`, {
    withCredentials: true,
  });

export const checkAuth = async () =>
  axios.get(`${import.meta.env.VITE_API_URL}/api/auth/`, {
    withCredentials: true,
  });
