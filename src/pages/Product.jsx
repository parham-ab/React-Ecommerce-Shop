import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "features/api/apiSlice";
import titleSplit from "utils/titleSplit";
import PreLoader from "components/common/Preloader";
import ProductSlider from "components/ProductSlider";
import ProductDetails from "components/ProductDetails";
const Product = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    refetch,
  } = useGetProductQuery({ id: productId });
  const { data: products } = useGetAllProductsQuery();
  const similarCategories = products
    ?.filter((item) => item?.category === product?.category)
    ?.filter((item) => item.id != productId);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) return <PreLoader />;
  return (
    <>
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
      <ProductDetails product={product} productId={productId} />
      <h3 className={`section-info m-auto mt-20`}>Similar Products</h3>
      <ProductSlider dataContent={similarCategories} />
    </>
  );
};

export default Product;
