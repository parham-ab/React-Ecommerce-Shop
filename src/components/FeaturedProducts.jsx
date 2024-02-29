import { useGetAllProductsQuery } from "../features/api/apiSlice";
import PreLoader from "components/common/Preloader";
import ProductCard from "./common/ProductCard";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  if (isLoading) return <PreLoader />;
  let mutableProducts = [...products]
    ?.sort((a, b) => b?.rating?.rate - a?.rating?.rate)
    .slice(0, 3);
  return (
    <>
      {mutableProducts.map((product) => (
        <div key={product.id} className="grid grid-cols-3 gap-3">
          <ProductCard freeDelivery {...product} />
        </div>
      ))}
    </>
  );
};
export default FeaturedProducts;
