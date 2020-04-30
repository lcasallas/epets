import React, { useState } from 'react';
import Modal from './Modal';
import Calendly from './Calendly';
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

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className='Header'>
        <img className='logo' src={Logo} />
        <nav>
          <ul className='nav-links'>
            <a href='/'>
              <img src={petToy} className='header-icon'></img>
              <li>Juguetes</li>
            </a>
            <a href='/'>
              <img src={dogFood} className='header-icon'></img>
              <li>Comida</li>
            </a>
            <a href='/'>
              <img src={clothes} className='header-icon'></img>
              <li>Ropa</li>
            </a>
            <a href='/'>
              <img src={stetic} className='header-icon'></img>
              <li>Estetica</li>
            </a>
            <span onClick={()=>{setModal(true)}}>
              <img src={medic} className='header-icon'></img>
              <li>Consulta Medica</li>
            </span>

            <img src={bordContact} className='header-icon'></img>
            <li>
              <a
                href='mailto:epets@animals.world.com?Subject=Hola%20Amigos%20de%20Epets!'
                target='_top'
              >
                Contactanos
              </a>
            </li>
          </ul>
        </nav>
        <img src={cookieIcon} className='cookie-menu'></img>
      </header>
      <Modal isOpen={modal} onClose={()=>{setModal(false)}}>
        <Calendly />
      </Modal>
    </>
  );
};

export default Header;
