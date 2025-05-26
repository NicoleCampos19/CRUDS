import React from 'react';
import './registerBranches.css';

const RegisterBranch = ({
    setName, name, 
    setAddress, address, 
    setBirthday, birthday, 
    setSchedule, schedule,
    setTelephone,telephone,
    saveBranch, id, handleEdit}) => {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">{id ? 'Editar Sucursal' : 'Registrar Sucursal'}</h2>
        <label className="form-label" htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Nombre de la sucursal"
        />

        <label className="form-label" htmlFor="address">Dirección</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            console.log("Dirección:", e.target.value);
          }}
          className="form-input"
          placeholder="Dirección"
        />

        <label className="form-label" htmlFor="birthday">Fecha abertura</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="form-input"
          placeholder="Fecha Abertura"
        />

        <label className="form-label" htmlFor="schedule">Horario</label>
        <input
          type="text"
          name="schedule"
          value={schedule}
          onChange={(e) => {
            setSchedule(e.target.value);
            console.log("Horario:", e.target.value);
          }}
          className="form-input"
          placeholder="Horario"
        />

        <label className="form-label" htmlFor="telephone">Teléfono</label>
        <input
          type="number"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="form-input"
          placeholder="Teléfono"
        />

        {!id ? (
          <button
            type="submit"
            className="form-button"
            onClick={(e) => saveBranch(e)}
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

export default RegisterBranch;