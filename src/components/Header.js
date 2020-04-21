import React from 'react';
import '../assets/styles/Header.css';
import Logo from '../assets/static/epetslogo.png';

const Header = () => (
  <header>
    <img className='logo' src={Logo} />
    <nav>
      <ul className='nav-links'>
        <a href='/'>
          <li>Perros</li>
        </a>
        <a href='/'>
          <li>Gatos</li>
        </a>
        <a href='/'>
          <li>Peces</li>
        </a>
        <a href='/'>
          <li>Aves</li>
        </a>
        <a href='/'>
          <li>Reptiles</li>
        </a>
        <a href='/'>
          <li>Mamíferos</li>
        </a>
      </ul>
    </nav>
  </header>
);

export default Header;
