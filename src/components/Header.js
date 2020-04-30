import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import Logo from '../assets/static/epetslogo.png';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mamalIcon from '../assets/static/mamalIcon.png';
import cookieIcon from '../assets/static/cookieIcon.png';
import petToy from '../assets/static/pettoy.png';
import dogFood from '../assets/static/dogfood.png';
import clothes from '../assets/static/tshirt.png';
import stetic from '../assets/static/stetic.png';
import medic from '../assets/static/consulta.png';
import bordContact from '../assets/static/birdcontact.png';

const Header = () => (
  <header className="Header">
    <img className='logo' src={Logo} />
    <nav>
      <ul className='nav-links'>
        <Link to='/toys'>
        <img src={petToy} className='header-icon'></img>
          <li>Juguetes</li>
        </Link>
        <Link to='food'>
        <img src={dogFood} className='header-icon'></img>
          <li>Comida</li>
        </Link>
        <Link to='/clothes'>
        <img src={clothes} className='header-icon'></img>
          <li>Ropa</li>
        </Link>
        <Link to='/esthethic'>
        <img src={stetic} className='header-icon'></img>
          <li>Estetica</li>
        </Link>
        <Link to='/medic'>
        <img src={medic} className='header-icon'></img>
          <li>Consulta Medica</li>
        </Link>
        
        <img src={bordContact} className='header-icon logeo'></img>
          <li>
          <a href="mailto:epets@animals.world.com?Subject=Hola%20Amigos%20de%20Epets!" target="_top">Contactanos</a>
          </li>
        
      </ul>
    </nav>
    <img src={cookieIcon} className='cookie-menu'></img>
    <div className='sign-register'>
      <Link to="/">Registro</Link>
      <Link to="/">Sign In</Link>
      
    </div>
  </header>
);

export default Header;
