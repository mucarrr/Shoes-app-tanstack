interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthResponse {
  message: string;
  user: User;
}

interface RefreshResponse {
  accessToken: string;
}

interface LogoutResponse {
  message: string;
}

interface GetMeResponse {
  user: User;
}

interface Shoe {
  _id: string;
  name: string;
  price: number;
  discount: number;
  picture: string[];
  description: string;
  category: string;
  brand: string;
  isNew: boolean;
  gender: string;
}

interface ShoeFormValues {
  name: string;
  price: number;
  discount: number;
  description: string;
  category: string;
  brand: string;
  isNew: boolean;
  gender: string;
}

export type {
  LoginValues,
  RegisterValues,
  User,
  AuthResponse,
  RefreshResponse,
  LogoutResponse,
  GetMeResponse,
  Shoe,
  ShoeFormValues,
};
