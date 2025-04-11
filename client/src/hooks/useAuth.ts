import { useNavigate } from "react-router-dom";
import { LoginValues, RegisterValues } from "../types/Types";
import apiAuth from "../service/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginValues) => apiAuth.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Logged in successfully");
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data);
      toast.error(error.response?.data.message || "Something went wrong");
    },
  });

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterValues) => apiAuth.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Account created successfully");
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message || "Something went wrong");
    },
  });

  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => apiAuth.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Logged out successfully");
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message || "Something went wrong");
    },
  });

  return {
    login,
    register,
    logout,
  };
};

export default useAuth;
