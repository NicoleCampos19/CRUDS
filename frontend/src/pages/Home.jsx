import React from 'react';
import './Home.css';
import bienvenida from '../../src/assets/bienvenida.png';
import productos from '../../src/assets/productos.png';
import marcas from '../../src/assets/sucursales.png';
import proveedores from '../../src/assets/proveedores.png';

const Home = () => {
  return (
    <div className="home-container" style={{ paddingTop: "200px" }}>
      {/* Sección superior: bienvenida */}
      <div className="welcome-section">
        <img src={bienvenida}
          alt="Bienvenida"
          className="welcome-image"
        />
      </div>

      {/* Sección inferior: tres opciones */}
      <div className="options-section">
        <a href="/products"> <img
          src={productos}
          alt="Productos"
          className="option-image"
        /></a>
       
        <a href="/branches"><img
          src={marcas}
          alt="Marcas"
          className="option-image"
        /></a>
        
         <a href="/providers"><img
          src={proveedores}
          alt="Proveedores"
          className="option-image"
        /></a>
        
      </div>
    </div>
  );
};

export default Home;
