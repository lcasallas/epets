import React from 'react';
import '../assets/styles/components/Product.css';

const Product = ({ name, image, url}) => (
  <div className="Product">
    <img className="Product__image" src={image} />
    <a className="Product__name" href={url}>
      {name}
    </a>
  </div>
);

export default Product;
