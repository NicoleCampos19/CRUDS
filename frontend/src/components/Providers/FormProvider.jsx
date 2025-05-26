import React from 'react';
import './FormProvider.css';

const FormProvider = ({setName, name, setTelephone, telephone, setImage, image, saveProvider, id, handleEdit}) => {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">{id ? 'Editar Proveedor' : 'Registrar Proveedor'}</h2>
        <label className="form-label" htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Nombre del proveedor"
        />

        <label className="form-label" htmlFor="description">Teléfono</label>
        <input
          type="number"
          name="description"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="form-input"
          placeholder="Teléfono del proveedor"
        />

        <label className="flex flex-col">
        <span className="form-label">Imagen</span>
        <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="file-input"
        />
        </label>

        {!id ? (
          <button
            type="submit"
            className="form-button"
            onClick={(e) => saveProvider(e)}
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

export default FormProvider;