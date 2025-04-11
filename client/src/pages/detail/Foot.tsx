import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 bg-black p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
            Add to Cart
          </button>
          <button className="bg-black p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
            <FaHeart />
          </button>
        </div>

        <button className="bg-my-blue p-4 rounded-lg cursor-pointer hover:brightness-90 transition">
          Buy Now
        </button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-grey-dark">
          About this product
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;
