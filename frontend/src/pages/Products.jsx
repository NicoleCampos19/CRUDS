import React from "react";
import './ProductsTab.css';
import ListProduct from "../components/Products/ListProduct";
import RegisterProduct from "../components/Products/registerProduct";
import useDataProducts from "../components/Products/hooks/useDataProducts";

const Products = () => {
  const {
   activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    products,
    setProducts,
    loading,
    saveProduct,
    deleteProduct,
    updateProduct,
    handleEdit,
  } = useDataProducts();

  return (
    <div className="product-page" style={{ paddingTop: "200px" }}>
      <div className="product-container">
          <div className="product-tabs">
          <button className={`product-tab ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
    Lista de productos
  </button>
  <button className={`product-tab ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
    Gestionar Productos
  </button>
</div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListProduct
                  products={products}
                  loading={loading}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterProduct
                  setName={setName}
                  setDescription={setDescription}
                  setPrice={setPrice}
                  setStock={setStock}
                  saveProduct={saveProduct}
                  name={name}
                  description={description}
                  price={price}
                  stock={stock}
                  id={id}
                  handleEdit={handleEdit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Products;
