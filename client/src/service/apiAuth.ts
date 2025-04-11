import { AuthResponse, GetMeResponse,   LogoutResponse, RefreshResponse, RegisterValues } from "../types/Types";
import { LoginValues } from "../types/Types";
import api from "./axios";

const apiAuth = {
  register: (data: RegisterValues) => api.post<AuthResponse>("/auth/register", data),
  login: async (data: LoginValues) => api.post<AuthResponse> ("/auth/login", data),
  refreshToken: () => api.post<RefreshResponse>("/auth/refresh-token"),
  logout: () => api.post<LogoutResponse>("/auth/logout"),
  getMe: () =>  api.get<GetMeResponse>("/auth/me")
};

export default apiAuth;
