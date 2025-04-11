import { FC } from "react";
import { useParams } from "react-router-dom";
import useShoes from "../../hooks/useShoes";
import Images from "./Images";
import Head from "./Head";
import Foot from "./Foot";
import Size from "./Size";
import Color from "./Color";

const Detail: FC = () => {
  const { id } = useParams();
  const { shoe } = useShoes();
  const { isLoading, error, data } = shoe(id as string);

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Error..</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images pictures={data.picture} />
      </div>

      <div className="flex flex-col gap-8">
        <Head item={data} />
        <Color colors={data.color} />
        <Size sizes={data.size} />
        <Foot description={data.description} />
      </div>
    </div>
  );
};

export default Detail;
