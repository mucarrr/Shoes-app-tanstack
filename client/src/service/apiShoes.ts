import { Shoe, ShoeFormValues } from "../types/Types";
import api from "./axios";

const apiShoes = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  create: (data: ShoeFormValues) => api.post<Shoe>("/shoes", data),
  update: (id: string, data: Partial<ShoeFormValues>) =>
    api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete<Shoe>(`/shoes/${id}`),
};
export default apiShoes;
