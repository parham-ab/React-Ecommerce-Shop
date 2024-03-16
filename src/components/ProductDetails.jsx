import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, removeItem } from "features/cartSlice";
import quantityCount from "utils/quantityCount";
import { Button, Chip } from "@nextui-org/react";
import { FaPlus, FaStar } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const ProductDetails = ({ product, productId }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex md:flex-row flex-col items-center justify-evenly container gap-9 m-auto">
      <div className="p-3 my-0 md:my-28 grid grid-cols-1">
        <img width={270} src={product?.image} alt={product?.title} />
      </div>
      <div className="border p-4 rounded-xl grid grid-cols-1 w-[300px] sm:w-[500px]">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
          {product?.title}
        </h1>
        <h2 className="text-gray-500 dark:text-gray-300 text-lg leading-5 my-5">
          {product?.description}
        </h2>
        <Chip
          variant="shadow"
          size="sm"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          {product?.category}
        </Chip>
        <div className="flex items-center gap-10 my-5">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="text-sm">{product?.rating?.rate}</span>
          </div>
          <span
            className={`${
              product?.rating?.count < 150
                ? "text-sm text-red-500"
                : "text-green-500"
            }`}
          >
            {product?.rating?.count}{" "}
            {product?.rating?.count < 150 ? "Items Left" : "In the Store"}
          </span>
        </div>
        <Chip color="success" variant="bordered">
          ${product?.price}
        </Chip>
        <div className="flex items-center justify-evenly my-5">
          <Button
            isIconOnly
            color="primary"
            variant="shadow"
            size="sm"
            className={`${quantityCount(state, +productId) <= 0 && "w-full"}`}
            onClick={() =>
              dispatch(
                addItem({
                  id: +productId,
                  title: product?.title,
                  image: product?.image,
                  price: product?.price,
                })
              )
            }
          >
            {quantityCount(state, +productId) <= 0 ? "Add" : <FaPlus />}
          </Button>
          <span
            className={`bg-black flex items-center justify-center text-white ${
              quantityCount(state, +productId) && "w-[33px] h-[33px]"
            } rounded-full text-xs`}
          >
            {quantityCount(state, +productId)}
          </span>
          {quantityCount(state, +productId) === 1 && (
            <Button
              isIconOnly
              color="danger"
              aria-label="delete"
              size="sm"
              onClick={() => dispatch(removeItem({ id: +productId }))}
            >
              <FaRegTrashAlt className="text-xl" />
            </Button>
          )}
          {quantityCount(state, +productId) > 1 && (
            <Button
              isIconOnly
              color="danger"
              aria-label="decrease"
              size="sm"
              onClick={() => dispatch(decrease({ id: +productId }))}
            >
              <TiMinus className="text-xl" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
