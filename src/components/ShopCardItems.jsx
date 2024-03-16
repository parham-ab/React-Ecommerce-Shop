import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@nextui-org/react";
import quantityCount from "utils/quantityCount";
import titleSplit from "utils/titleSplit";
import { addItem } from "features/cartSlice";
import { removeItem } from "features/cartSlice";
import { decrease } from "features/cartSlice";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const ShopCardItems = ({ id, title, price, image, state }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-200 dark:bg-neutral-800 p-3 m-1 rounded-2xl shadow-md">
      <Link
        to={`/${id}`}
        className="flex flex-col sm:flex-row items-center gap-5"
      >
        <img
          src={image}
          alt={id}
          width={"80px"}
          height={"80px"}
          className="m-auto object-contain w-[80px] h-[80px]"
        />
        <div>
          <Tooltip content={title}>
            <h3 className="text-sm font-bold">{titleSplit(title)}</h3>
          </Tooltip>
          <small className="text-gray-600 dark:text-neutral-300">
            $ {price?.toLocaleString()}
          </small>
        </div>
      </Link>
      <section className="flex items-center justify-between my-5">
        <Button
          isIconOnly={!quantityCount(state, +id) <= 0}
          color="primary"
          variant="shadow"
          size="sm"
          onClick={() =>
            dispatch(
              addItem({
                id: id,
                title: title,
                image: image,
                price: price,
              })
            )
          }
        >
          {quantityCount(state, +id) && <FaPlus />}
        </Button>
        <span
          className={`bg-black flex items-center justify-center text-white ${
            quantityCount(state, +id) && "w-[33px] h-[33px]"
          } rounded-full text-xs mx-2`}
        >
          {quantityCount(state, +id)}
        </span>
        {quantityCount(state, +id) === 1 && (
          <Button
            isIconOnly
            color="danger"
            aria-label="delete"
            size="sm"
            onClick={() => dispatch(removeItem({ id: id }))}
          >
            <FaRegTrashAlt className="text-xl" />
          </Button>
        )}
        {quantityCount(state, +id) > 1 && (
          <Button
            isIconOnly
            color="danger"
            aria-label="decrease"
            size="sm"
            onClick={() => dispatch(decrease({ id: id, price: price }))}
          >
            <TiMinus className="text-xl" />
          </Button>
        )}
      </section>
    </div>
  );
};

export default ShopCardItems;
