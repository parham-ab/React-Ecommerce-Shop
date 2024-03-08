import FeaturedProducts from "components/FeaturedProducts";
import PreLoader from "components/common/Preloader";
import Categories from "components/Categories";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import productCategories from "constants/productCategories";
import Products from "components/Products";

const HomePage = () => {
  const { data: products, isLoading: featuredProductsIsLoading } =
    useGetAllProductsQuery();

  return (
    <>
      <section>
        <h3
          className={`text-2xl font-bold text-gray-600 border-b-2 border-purple-800 w-fit mx-auto ${
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

      <h3
        className={`text-2xl font-bold text-gray-600 border-b-2 border-purple-800 w-fit m-auto mt-20`}
      >
        Categories
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 my-10 py-9 bg-gray-100">
        {productCategories?.map((item) => (
          <div key={item.id} className="m-auto">
            <Categories {...item} />
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12">
        <Products data={products} />
      </section>
    </>
  );
};

export default HomePage;
