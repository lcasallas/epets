import React from 'react';
import '../assets/styles/Header.css';
import Logo from '../assets/static/epetslogo.png';

const Header = () => (
  <header>
    <img className='logo' src={Logo} />
    <nav>
      <ul className='nav-links'>
        <a href='/'>
          <li>Juguetes</li>
        </a>
        <a href='/'>
          <li>Comida</li>
        </a>
        <a href='/'>
          <li>Ropa</li>
        </a>
        <a href='/'>
          <li>Estetica</li>
        </a>
        <a href='/'>
          <li>Consulta Medica</li>
        </a>
      </ul>
    </nav>
  </header>
);

export default Header;
