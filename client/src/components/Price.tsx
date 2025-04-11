import { FC } from "react";
import { Shoe } from "../types/Types";

interface Props {
  item: Shoe;
  designs: string;
}

const Price: FC<Props> = ({ item, designs }) => {
  let price = item.price;
  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <span
      className={`${
        item.discount ? "text-my-yellow" : "text-white"
      } ${designs}`}
    >
      ${price.toFixed(2)}
    </span>
  );
};

export default Price;
