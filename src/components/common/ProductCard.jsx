import { FaTruckFast } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { FaStar, FaRegTrashAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import titleSplit from "utils/titleSplit";

const ProductCard = ({ id, title, image, price, rating, freeDelivery }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-xl w-[240px] h-[350px] hover:bg-gray-200 transition-all">
      <Link to={`products/${id}`} className="flex flex-col gap-3">
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
          {rating?.count < 10 && (
            <span className="text-xs text-red-500">{rating?.count} items Left</span>
          )}
        </div>

        <p className="font-bold text-md">$ {price.toLocaleString()}</p>
      </Link>

      <div className="flex items-center justify-between my-5">
        <Button color="primary" variant="shadow" size="sm">
          Add
        </Button>
        {/* <Button isIconOnly color="danger" aria-label="decrease" size="sm">
            <TiMinus className="text-xl" />
          </Button>
          <Button isIconOnly color="danger" aria-label="decrease" size="sm">
            <FaRegTrashAlt className="text-xl" />
          </Button> */}

        {/* {count} */}
        {/* <Button isIconOnly color="success" aria-label="add" size="sm">
            <IoIosAdd className="text-xl" />
          </Button> */}
      </div>
    </div>
  );
};

export default ProductCard;
