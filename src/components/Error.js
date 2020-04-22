import React from 'react';
import '../assets/styles/components/Error.css';
import error from '../assets/static/error.png';

const Error = ({ message }) => (
  <div className='Error'>
    <img className='Error__icon' src={error} />
    <span className='Error__message'>{message}</span>
  </div>
);

export default Error;
