import { FC } from "react";
import useShoes from "../../hooks/useShoes";
import Card from "../../components/Card";

const List: FC = () => {
  const { shoes } = useShoes();
  const { isLoading, error, data } = shoes;

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something Went Wrong</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {data?.map((shoe) => (
        <Card key={shoe._id} shoe={shoe} />
      ))}
    </div>
  );
};

export default List;
