import React from 'react';
import '../assets/styles/components/SectionProducts.css';
import useProducts from '../hooks/useProducts';
import Card from './Card';
import Loader from './Loader';
import Error from './Error';

const SectionProducts = ({ section, pet = '' }) => {
  const { products, loading, error } = useProducts(
    `https://epets-pet-market.herokuapp.com/api/${
      section === 'medic' ? 'services' : 'products'
    }/${section}/${pet}`
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message="No se pudieron obtener los productos." />;
  }

  if (!pet && section !== 'medic' && Object.values(products).length) {
    const productsArray = [];

    products.forEach((section) => {
      Object.values(section).forEach((product) => {
        productsArray.push(product);
      });

      console.log(productsArray);
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
        let data;
        if (section === 'medic') {
          data = {
            photo: product.image,
            name: product.title,
            body: product.description,
            link: product.url,
            linkShow: 'Más información',
          };
        } else {
          data = {
            photo: product.image,
            name: product.name,
            body: product.description,
            link: product.url,
            linkShow: 'Comprar producto',
          };
        }

        return <Card key={index} data={data} color={section} />;
      })}
    </section>
  );
};

export default SectionProducts;
