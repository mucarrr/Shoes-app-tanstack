import { FC } from "react";
import Form from "../../components/Form";
import { ShoeFormValues } from "../../types/Types";
import useShoes from "../../hooks/useShoes";

const Create: FC = () => {
  const { create } = useShoes();

  const onSubmit = (values: ShoeFormValues) => {
    create.mutate(values);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Add Product</h1>

      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
