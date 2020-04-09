import React, { useContext } from 'react';
import Header from '../components/Header';
import ListOfCards from '../components/ListOfCards';
import InformationContext from '../Context/Information';
import Footer from '../components/Footer';
import Ads from '../components/Ads';
import ProductList from '../components/ProductsList';

const Home = () => {
  const information = useContext(InformationContext);

  return (
    <>
      <Header />
      <Ads />
      <section>
        {information.sections.map((typeOfProduct) => {
          return (
            <ListOfCards
              key={typeOfProduct.color}
              color={typeOfProduct.color}
              title={typeOfProduct.title}
              id={typeOfProduct.id}
              subtitle={[typeOfProduct.subTitle]}
            />
          );
        })}
      </section>
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
