import React from 'react';
import '../assets/styles/components/SectionProducts.css';
import useProducts from '../hooks/useProducts';
import Card from './Card';

const SectionProducts = ({ section, pet='' }) => {
  const products = useProducts(`https://epets-pet-market.herokuapp.com/api/${section}/${pet}`);

  return (
    <section className='SectionProducts'>
      {products.map((product) => {
        const data = {
          photo: product.image,
          name: product.name,
          body: product.description,
          link: product.url,
          linkShow: 'Comprar producto'
        };

        return <Card key={data.name} data={data} color={section} />;
      })}
    </section>
  );
};

export default SectionProducts;
