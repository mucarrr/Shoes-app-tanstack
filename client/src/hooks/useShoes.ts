import { useMutation, useQuery } from "@tanstack/react-query";
import apiShoes from "../service/apiShoes";
import { ShoeFormValues } from "../types/Types";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useShoes = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const shoes = useQuery({
    queryKey: ["shoes"],
    queryFn: () => apiShoes.getAll(),
    select: (data) => data.data,
  });

  const shoe = (id: string) =>
    useQuery({
      queryKey: ["shoes", id],
      queryFn: () => apiShoes.getById(id),
      select: (data) => data.data,
    });

  const create = useMutation({
    mutationFn: (data: ShoeFormValues) => apiShoes.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ayakkabı başarıyla oluşturuldu");
      navigate("/admin");
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message || "Bir hata oluştu");
    },
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ShoeFormValues> }) =>
      apiShoes.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ayakkabı başarıyla güncellendi");
      navigate("/admin");
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message || "Bir hata oluştu");
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => apiShoes.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ayakkabı başarıyla silindi");
      navigate("/admin");
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message || "Bir hata oluştu");
    },
  });

  return {
    shoes,
    shoe,
    create,
    update,
    remove,
  };
};

export default useShoes;
