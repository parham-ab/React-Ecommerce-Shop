import { Breadcrumbs, BreadcrumbItem, Chip } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/api/apiSlice";
import { useEffect } from "react";
import titleSplit from "utils/titleSplit";
import { FaStar } from "react-icons/fa6";

const Product = () => {
  const { id: productId } = useParams();
  const { data, isLoading, refetch } = useGetProductQuery({ id: productId });
  useEffect(() => {
    refetch();
  }, [refetch]);
  console.log(data);
  return (
    <div className="">
      <Breadcrumbs
        separator="/"
        itemClasses={{
          separator: "px-2",
        }}
      >
        <BreadcrumbItem>
          <Link to={"/"}>Products</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          {data ? titleSplit(data?.title) : "Loading..."}
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <div className="border p-3">
          <img width={270} src={data?.image} alt={data?.title} />
        </div>

        <div className="border p-4 rounded-xl w-[500px] min-w-[300px]">
          <h1 className="text-2xl font-bold text-gray-600">{data?.title}</h1>
          <Chip color="success" variant="bordered">
            ${data?.price}
          </Chip>

          <h2 className="text-gray-500 text-lg leading-5">
            {data?.description}
          </h2>
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            {data?.category}
          </Chip>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm">{data?.rating?.rate}</span>
            </div>

            <span
              className={`${
                data?.rating?.count < 150
                  ? "text-sm text-red-500"
                  : "text-green-500"
              }`}
            >
              {data?.rating?.count < 150 ? "Items Left" : "In the Store"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
