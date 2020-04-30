import React, { useContext } from 'react';
import ListOfCards from '../components/ListOfCards';
import InformationContext from '../Context/Information';
import Ads from '../components/Ads';
import ProductList from '../components/ProductsList';
import Main from '../components/Main';

const Home = () => {
  const information = useContext(InformationContext);

  return (
    <>
      <Ads />
      <Main />
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
    </>
  );
};

export default Home;
