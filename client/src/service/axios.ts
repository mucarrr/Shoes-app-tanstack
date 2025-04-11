import axios from "axios";
import { AuthResponse } from "../types/Types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json", //apiye gonderilen verinin tipi
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log("interceptor caught error", err);
    // hatayı aldığımız api isteğini sakla
    const originalReq = err.config;

    // eğer hatanın kodu 401 ise yani access tokenın süresi dolduysa
    if (
      err.response.status === 401 &&
      !originalReq._retry &&
      err.response.data.message === "Access token expired"
    ) {
      originalReq._retry = true;

      // acccess tokenı yenile
      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        console.log("refreshed token", res);

        // yenilenen access token ile orjinal isteği tekrar at
        return api(originalReq);
      } catch (err) {
        console.log("access token refresh error", err);
        // refresh tokenın süresi dolduysa
        await api.post("/auth/logout");

        // login sayfasına yönlendir
        window.location.href = "/login";

        // yeni bir hata aldığında hata döndür
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
