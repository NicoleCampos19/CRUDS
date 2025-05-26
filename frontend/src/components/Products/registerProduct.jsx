import React from 'react';
import './RegisterProduct.css';

const RegisterProduct = ({setName, name, setDescription, description, setPrice, price, setStock, stock, saveProduct, id, handleEdit}) => {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">{id ? 'Editar Producto' : 'Registrar Producto'}</h2>
        <label className="form-label" htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Nombre del producto"
        />

        <label className="form-label" htmlFor="description">Descripción</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          placeholder="Descripción"
        />

        <label className="form-label" htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
          placeholder="Precio"
        />

        <label className="form-label" htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="form-input"
          placeholder="Stock disponible"
        />

        {!id ? (
          <button
            type="submit"
            className="form-button"
            onClick={(e) => saveProduct(e)}
          >
            Guardar
          </button>
        ) : (
          <button
            type="submit"
            className="form-button"
            onClick={(e) => handleEdit(e)}
          >
            Editar
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterProduct;
