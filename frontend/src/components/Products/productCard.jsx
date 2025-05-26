import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, deleteProduct, updateProduct }) => {
  return (
    <div className="product-card">
      <div className="product-content">
        <h2 className="product-title">
         <span className="product-name">{product.name}</span>
        </h2>
        <p className="product-info">
          <strong>Descripción:</strong> {product.description}
        </p>
        <p className="product-info">
          <strong>Precio:</strong> ${product.price}
        </p>
        <p className="product-info">
          <strong>Stock:</strong> {product.stock}
        </p>

        <div className="product-buttons">
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(product._id)}
          >
            Eliminar
          </button>
          <button
            className="btn btn-warning"
            onClick={() => updateProduct(product)}
          >
            Editar Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

