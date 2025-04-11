import { FC } from "react";
import Form from "../../components/Form";
import { ShoeFormValues } from "../../types/Types";
import useShoes from "../../hooks/useShoes";
import { useParams } from "react-router-dom";

const Edit: FC = () => {
  const { id } = useParams();
  const { shoe, update } = useShoes();
  const { isLoading, data } = shoe(id as string);

  const onSubmit = (values: ShoeFormValues) => {
    update.mutate({ id: id as string, data: values });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Edit Product</h1>
      <Form onSubmit={onSubmit} data={data} />
    </div>
  );
};

export default Edit;
