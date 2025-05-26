import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
         <img src={logo} style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />

        </div>
        <div className="navbar-right">
          <span className="email">ferreteriepasv@gmail.com</span>
          <div className="divider" />
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="divider" />
          <span className="label">Ferreteria EPA</span>
        </div>
      </div>

      <div className="navbar-menu">
  <a href="/" className="active">Inicio</a>
  <a href="/products">Productos</a>
  <a href="/branches">Sucursales</a>
  <a href="/providers">Proveedores</a>
</div>

    </div>
  );
};

export default Navbar;

