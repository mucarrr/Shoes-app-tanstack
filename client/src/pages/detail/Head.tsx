import { FC } from "react";
import { Shoe } from "../../types/Types";
import Price from "../../components/Price";
import Badge from "../../components/Badge";

interface Props {
  item: Shoe;
}

const Head: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge item={item} />

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {item.name}
      </h1>

      <div className="text-2xl flex gap-1">
        <Price item={item} designs="!text-my-blue" />

        {item.discount && (
          <span className="line-through ps-3">${item.price}</span>
        )}
      </div>
    </div>
  );
};

export default Head;
