import React from 'react';
import '../assets/styles/components/Product.css';

const Product = () => (
  <div className="Product">
    <img className="Product__image" src="https://i.imgur.com/ROBCh63.jpg" />
    <a className="Product__name" href='https://epets.com/product'>
      Palitas de recolección - Pooplant
    </a>
  </div>
);

export default Product;
