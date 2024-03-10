import { Breadcrumbs, BreadcrumbItem, Chip } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/api/apiSlice";
import { useEffect } from "react";
import titleSplit from "utils/titleSplit";
import { FaStar } from "react-icons/fa6";
import PreLoader from "components/common/Preloader";
import ProductCard from "components/common/ProductCard";
import { EffectCards, EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

const Product = () => {
  const { id: productId } = useParams();
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
        </div>
      </div>

      <div className="block sm:hidden">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCreative]}
          className="mySwiper"
        >
          {similarCategories?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard freeDelivery {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:block">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="mySwiper"
        >
          {similarCategories?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard freeDelivery {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
