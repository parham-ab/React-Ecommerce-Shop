import ProductCard from "./common/ProductCard";

const Products = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="m-auto">
          <ProductCard freeDelivery {...item} />
        </div>
      ))}
    </>
  );
};

export default Products;
