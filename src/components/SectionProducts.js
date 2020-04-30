import React from 'react';
import '../assets/styles/components/SectionProducts.css';
import useProducts from '../hooks/useProducts';
import Card from './Card';

const SectionProducts = ({ section, pet = '' }) => {
  const products = useProducts(
    `https://epets-pet-market.herokuapp.com/api/${section}/${pet}`
  );

  if (!pet && Object.values(products).length) {
    const productsArray = [];

    products.forEach((section) => {
      Object.values(section).forEach((product) => {
        productsArray.push(product);
      });
    });

    return (
      <section className="SectionProducts">
        {productsArray.map((product, index) => {
          const data = {
            photo: product.image,
            name: product.name,
            body: product.description,
            link: product.url,
            linkShow: 'Comprar producto',
          };

          return <Card key={index} data={data} color={section} />;
        })}
      </section>
    );
  }

  return (
    <section className="SectionProducts">
      {products.map((product, index) => {
        const data = {
          photo: product.image,
          name: product.name,
          body: product.description,
          link: product.url,
          linkShow: 'Comprar producto',
        };

        return <Card key={index} data={data} color={section} />;
      })}
    </section>
  );
};

export default SectionProducts;
