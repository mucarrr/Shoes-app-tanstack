import { Field, Formik, Form as FormikForm } from "formik";
import { FC } from "react";
import { Shoe, ShoeFormValues } from "../types/Types";
import Input from "./Input";
import * as Yup from "yup";

interface Props {
  onSubmit: (value: ShoeFormValues) => void;
  data?: Shoe;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be positive"),
  discount: Yup.number()
    .min(0, "Discount must be positive")
    .max(100, "Discount cannot exceed 100%"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  brand: Yup.string().required("Brand is required"),
  isNew: Yup.boolean(),
  gender: Yup.string().required("Gender is required"),
});

const Form: FC<Props> = ({ onSubmit, data }) => {
  const initialValues: ShoeFormValues = {
    name: data?.name || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
    picture: data?.picture || [],
    description: data?.description || "",
    sizes: data?.sizes || [],
    colors: data?.colors || [],
    category: data?.category || "",
    brand: data?.brand || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikForm className="flex flex-col gap-5">
        <Input label="Name" name="name" type="text" />
        <Input label="Price" name="price" type="number" />
        <Input label="Discount" name="discount" type="number" />
        <Input label="Description" name="description" type="textarea" />
        <Input label="Category" name="category" type="text" />
        <Input label="Brand" name="brand" type="text" />
        <Input label="New" name="isNew" type="checkbox" />

        <div className="flex items-center gap-2">
          <Field type="radio" name="gender" id="men" value="men" />
          <label htmlFor="men">Men</label>
          <Field type="radio" name="gender" id="women" value="women" />
          <label htmlFor="women">Women</label>
        </div>

        <button
          type="submit"
          className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer"
        >
          Send
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
