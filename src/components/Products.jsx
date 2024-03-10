import { useSelector } from "react-redux";
import ProductCard from "./common/ProductCard";

const Products = ({ data }) => {
  const state = useSelector((state) => state.utils.categoryStatus);
  let filteredData = data?.filter((item) => item.category === state);

  return (
    <>
      {state === "All"
        ? data?.map((item) => (
            <div key={item.id} className="m-auto">
              <ProductCard freeDelivery {...item} />
            </div>
          ))
        : filteredData?.map((item) => (
            <div key={item.id} className="m-auto">
              <ProductCard freeDelivery {...item} />
            </div>
          ))}
    </>
  );
};

export default Products;
