import ProductCard from "./productCard";
import React from "react";

const ListProducts = ({ products, loading, deleteProduct, updateProduct }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;