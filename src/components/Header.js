import React from 'react';
import '../assets/styles/Header.css';
import Logo from '../assets/static/epetslogo.png';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mamalIcon from '../assets/static/mamalIcon.png';

const Header = () => (
  <header>
    <img className='logo' src={Logo} />
    <nav>
      <ul className='nav-links'>
        <img src={dogIcon} ></img>
        <a href='/'>
          <li>Perros</li>
        </a>
        <a href='/'>
        <img src={catIcon} ></img>
          <li>Gatos</li>
        </a>
        <a href='/'>
        <img src={fishIcon} ></img>
          <li>Peces</li>
        </a>
        <a href='/'>
        <img src={birdIcon} ></img>
          <li>Aves</li>
        </a>
        <a href='/'>
        <img src={reptileIcon} ></img>
          <li>Reptiles</li>
        </a>
        <a href='/'>
        <img src={mamalIcon} ></img>
          <li>Mamíferos</li>
        </a>
      </ul>
    </nav>
  </header>
);

export default Header;
