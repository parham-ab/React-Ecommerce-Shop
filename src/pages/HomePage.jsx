import { useGetAllProductsQuery } from "../features/api/apiSlice";
import productCategories from "constants/productCategories";
import FeaturedProducts from "components/FeaturedProducts";
import PreLoader from "components/common/Preloader";
import Categories from "components/Categories";
import Products from "components/Products";

const HomePage = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  return (
    <>
      <section>
        <h3 className={`section-info ${!isLoading && "mb-20"}`}>
          Featured Products
        </h3>

        {isLoading ? (
          <PreLoader />
        ) : (
          <div className="grid xs:grid-cols-12 md:grid-cols-3 gap-3">
            <FeaturedProducts products={products} isLoading={isLoading} />
          </div>
        )}
      </section>

      <h3 className={`section-info mt-20`}>Categories</h3>
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-44 mt-14 py-9 bg-gray-100 dark:bg-neutral-800">
        {productCategories?.map((item) => (
          <div key={item.id} className="m-auto">
            <Categories {...item} />
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 pb-20">
        <Products data={products} />
      </section>
    </>
  );
};

export default HomePage;
