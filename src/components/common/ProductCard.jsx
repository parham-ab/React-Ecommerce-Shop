import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTruckFast } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { FaStar, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import titleSplit from "utils/titleSplit";
import { addItem, decrease, removeItem } from "../../features/cartSlice";
import quantityCount from "../../utils/quantityCount";

const ProductCard = ({ id, title, image, price, rating, freeDelivery }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 p-2 rounded-xl w-[240px] h-[350px] hover:bg-gray-200 transition-all">
      <Link to={`/${id}`} className="flex flex-col gap-3">
        <img
          src={image}
          alt={title}
          width={"150px"}
          height={"150px"}
          className="m-auto object-contain w-[150px] h-[150px]"
        />

        {freeDelivery && (
          <span className="flex items-center gap-2">
            <FaTruckFast className="text-red-500" />
            <p className="text-xs text-gray-600 font-bold">Free Delivery</p>
          </span>
        )}
        <Tooltip content={title}>
          <h3 className="text-sm font-bold">{titleSplit(title)}</h3>
        </Tooltip>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="text-sm">{rating?.rate}</span>
          </div>
          {rating?.count < 150 && (
            <span className="text-xs text-red-500">
              {rating?.count} items Left
            </span>
          )}
        </div>

        <p className="font-bold text-md">$ {price.toLocaleString()}</p>
      </Link>

      <div className="flex items-center justify-between my-5">
        <Button
          isIconOnly={!quantityCount(state, id) <= 0}
          color="primary"
          variant="shadow"
          size="sm"
          onClick={() => dispatch(addItem({ id }))}
        >
          {quantityCount(state, id) <= 0 ? "Add" : <FaPlus />}
        </Button>

        <span
          className={`bg-black flex items-center justify-center text-white ${
            quantityCount(state, id) && "w-[33px] h-[33px]"
          } rounded-full text-xs`}
        >
          {quantityCount(state, id)}
        </span>

        {quantityCount(state, id) === 1 && (
          <Button
            isIconOnly
            color="danger"
            aria-label="delete"
            size="sm"
            onClick={() => dispatch(removeItem({ id }))}
          >
            <FaRegTrashAlt className="text-xl" />
          </Button>
        )}
        {quantityCount(state, id) > 1 && (
          <Button
            isIconOnly
            color="danger"
            aria-label="decrease"
            size="sm"
            onClick={() => dispatch(decrease({ id }))}
          >
            <TiMinus className="text-xl" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
