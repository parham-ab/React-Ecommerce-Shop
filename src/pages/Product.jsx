import { Breadcrumbs, BreadcrumbItem, Chip, Button } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/api/apiSlice";
import { useEffect } from "react";
import titleSplit from "utils/titleSplit";
import { FaPlus, FaStar } from "react-icons/fa6";
import PreLoader from "components/common/Preloader";
import ProductSlider from "components/ProductSlider";
import quantityCount from "utils/quantityCount";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, removeItem } from "../features/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const Product = () => {
  const { id: productId } = useParams();
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {
    data: product,
    isLoading,
    refetch,
  } = useGetProductQuery({ id: productId });
  const { data: products } = useGetAllProductsQuery();
  const similarCategories = products?.filter(
    (item) => item?.category === product?.category
  );
  similarCategories?.shift();
  console.log(state);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) return <PreLoader />;

  return (
    <div>
      <Breadcrumbs
        separator="/"
        itemClasses={{
          separator: "px-2",
        }}
        className="p-8"
      >
        <BreadcrumbItem>
          <Link to={"/"}>Products</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          {product ? titleSplit(product?.title) : "Loading..."}
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex md:flex-row flex-col items-center justify-evenly container gap-9 m-auto">
        <div className="p-3 my-28 grid grid-cols-1">
          <img width={270} src={product?.image} alt={product?.title} />
        </div>

        <div className="border p-4 rounded-xl grid grid-cols-1 w-[300px] sm:w-[500px]">
          <h1 className="text-2xl font-bold text-gray-600">{product?.title}</h1>
          <h2 className="text-gray-500 text-lg leading-5 my-5">
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
              color="primary"
              variant="shadow"
              size="sm"
              isIconOnly
              onClick={() => dispatch(addItem({ id: productId }))}
              className={`${quantityCount(state, productId) <= 0 && "w-full"}`}
            >
              {quantityCount(state, productId) <= 0 ? "Add" : <FaPlus />}
            </Button>

            <span
              className={`bg-black flex items-center justify-center text-white ${
                quantityCount(state, productId) && "w-[33px] h-[33px]"
              } rounded-full text-xs`}
            >
              {quantityCount(state, productId)}
            </span>

            {quantityCount(state, productId) === 1 && (
              <Button
                isIconOnly
                color="danger"
                aria-label="delete"
                size="sm"
                onClick={() => dispatch(removeItem({ id: productId }))}
              >
                <FaRegTrashAlt className="text-xl" />
              </Button>
            )}
            {quantityCount(state, productId) > 1 && (
              <Button
                isIconOnly
                color="danger"
                aria-label="decrease"
                size="sm"
                onClick={() => dispatch(decrease({ id: productId }))}
              >
                <TiMinus className="text-xl" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <h3
        className={`text-2xl font-bold text-gray-600 border-b-2 border-purple-800 w-fit m-auto mt-20`}
      >
        Similar Products
      </h3>
      <ProductSlider dataContent={similarCategories} />
    </div>
  );
};

export default Product;
