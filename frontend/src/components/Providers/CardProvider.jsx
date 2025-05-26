import React from "react";
import "./CardProvider.css";

const CardProvider = ({ provider, deleteProvider, updateProvider }) => {
  return (
    <div className="product-card">
      {/* Imagen de la sucursal */}
      <img src={provider.image} alt={provider.name} className="branch-image" />

      <div className="product-content">
        <h2 className="product-title">
          <span className="product-name">{provider.name}</span>
        </h2>
        <p className="product-info">
          <strong>Teléfono:</strong> {provider.telephone}
        </p>

        <div className="product-buttons">
          <button
            className="btn btn-danger"
            onClick={() => deleteProvider(provider._id)}
          >
            Eliminar
          </button>
          <button
            className="btn btn-warning"
            onClick={() => updateProvider(provider)}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProvider;