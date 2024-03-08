import FeaturedProducts from "components/FeaturedProducts";
import toast from "react-hot-toast";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import PreLoader from "components/common/Preloader";
import { nanoid } from "@reduxjs/toolkit";
import removeDuplicateValues from "../utils/removeDuplicateValues";

const HomePage = () => {
  const { data: products, isLoading: featuredProductsIsLoading } =
    useGetAllProductsQuery();
  let productsCategory = products ? [...products] : [];
  const uniqueCategories = removeDuplicateValues(
    productsCategory?.map((item) => item?.category)
  );

  return (
    <>
      <section>
        <h3
          className={`text-2xl font-bold text-gray-600 border-b-2 border-red-400 w-fit m-auto ${
            !featuredProductsIsLoading && "mb-20"
          }`}
        >
          Featured Products
        </h3>

        {featuredProductsIsLoading ? (
          <PreLoader />
        ) : (
          <div className="grid xs:grid-cols-12 md:grid-cols-3 gap-3">
            <FeaturedProducts
              products={products}
              isLoading={featuredProductsIsLoading}
            />
          </div>
        )}
      </section>

      <section>
        {uniqueCategories?.map((item) => (
          <div key={nanoid()}>{item}</div>
        ))}
      </section>
    </>
  );
};

export default HomePage;
