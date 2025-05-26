import React from "react";
import "./BranchCard.css";

const BranchCard = ({ branch, deleteBranch, updateBranch }) => {
  return (
    <div className="product-card">
      <div className="product-content">
        <h2 className="product-title">
           <span className="product-name">{branch.name}</span>
        </h2>
        <p className="product-info">
          <strong>Dirección:</strong> {branch.address}
        </p>
        <p className="product-info">
          <strong>Fecha abertura:</strong> ${branch.birthday}
        </p>
        <p className="product-info">
          <strong>Horario:</strong> {branch.schedule}
        </p>
        <p className="product-info">
          <strong>Teléfono:</strong> {branch.telephone}
        </p>

        <div className="product-buttons">
          <button
            className="btn btn-danger"
            onClick={() => deleteBranch(branch._id)}
          >
            Eliminar
          </button>
          <button
            className="btn btn-warning"
            onClick={() => updateBranch(branch)}
          >
            Editar Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;

