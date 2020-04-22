import React from 'react';
import { createPortal } from 'react-dom';
import '../assets/styles/components/Modal.css';
import close from '../assets/static/close.png';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className='Modal'>
      <figure onClick={onClose} className='Modal__close'>
        <img className='Modal__close__icon' src={close}/>
      </figure>
      <div className='Modal__container'>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
