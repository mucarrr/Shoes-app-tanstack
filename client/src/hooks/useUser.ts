import apiAuth from "../service/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiAuth.getMe(),
    retry: false,
    select: (data) => data.data.user,//tanstackten gelen bir ozellik. user:data.data.user yapmak yerine select ile yapıyoruz.
  });

  return { user:data, isLoading, error };
};

export default useUser;
