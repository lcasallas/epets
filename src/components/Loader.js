import React from 'react';
import '../assets/styles/components/Loader.css';

const Loader = () => (
  <div className='Loader'>
    <div className='Loader__heart'>
      <div></div>
    </div>
    <span className='Loader__text'>
      Cargando...
    </span>
  </div>
);

export default Loader;
