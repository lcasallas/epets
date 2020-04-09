import React from 'react';
import '../assets/styles/components/ProductsList.css';
import Product from './Product';

const dataJSON = {
  title: 'Cuida el planeta',
  products: [
    {
      id: 1,
      name: 'Palitas de recolección - Pooplant',
      image: 'https://i.imgur.com/kZ8vpcs.jpg',
      url: 'https://i.imgur.com/kZ8vpcs.jpg',
    },
    {
      id: 2,
      name: 'Poopy bags - Compospack',
      image: 'https://i.imgur.com/dge8oeC.jpg',
      url: 'https://i.imgur.com/dge8oeC.jpg',
    },
    {
      id: 3,
      name: 'Bolsas de almidón - Ecoleza',
      image: 'https://i.imgur.com/ROBCh63.jpg',
      url: 'https://i.imgur.com/ROBCh63.jpg',
    },
  ],
};

const ProductsList = ({ data = dataJSON }) => (
  <section className="ProductsList">
    <h2 className="ProductsList__title">{data.title}</h2>
    <div className="ProductsList__products">
      {data.products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          url={product.url}
        />
      ))}
    </div>
  </section>
);

export default ProductsList;
