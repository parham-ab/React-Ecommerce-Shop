import ProductCard from "./common/ProductCard";

const FeaturedProducts = ({ products }) => {
  let mutableProducts = [...products]
    ?.sort((a, b) => b?.rating?.rate - a?.rating?.rate)
    .slice(0, 3);
  return (
    <>
      {mutableProducts.map((product) => (
        <div key={product.id} className="m-auto">
          <ProductCard freeDelivery {...product} />
        </div>
      ))}
    </>
  );
};
export default FeaturedProducts;
