import api from "./api";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  email: string;
  password: string;
  username: string;
  photo: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/sign-in", data);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await api.post("/auth/sign-up", data);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const forgotPassword = async (username: string) => {
  return api.post("/auth/forgot-password", { username });
};

export const resetPassword = async (token: string, newPassword: string) => {
  return api.post("/auth/reset-password", { token, newPassword });
};

export const getUser = () => {
  return api.get("/auth/user");
};
