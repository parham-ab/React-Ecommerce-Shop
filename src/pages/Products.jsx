import FeaturedProducts from "components/FeaturedProducts";

const Products = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-600 border-b-2 border-red-400 w-fit m-auto mb-20">
        Featured Products
      </h3>
      <div className="grid xs:grid-cols-12 md:grid-cols-3 gap-3">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Products;
