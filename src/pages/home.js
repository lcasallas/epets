import React, { useContext } from 'react';
import ListOfCards from '../components/ListOfCards';
import InformationContext from '../Context/Information';
import Ads from '../components/Ads';
import ProductList from '../components/ProductsList';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Ads />
      <Main />
      <ListOfCards
        key='toys'
        title='Juguetes Destacados'
        id='toys'
      />
      <ListOfCards
        key='food'
        title='Comida'
        id='food'
      />
      <ListOfCards
        key='medic'
        title='Servicios Médicos'
        id='medic'
      />
      <ProductList />
    </>
  );
};

export default Home;
