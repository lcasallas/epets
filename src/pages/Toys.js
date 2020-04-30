import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';

export default function Toys() {
    return (
      <>
        <Header />
        <div className={`cards__title`}>
          <h2>Hello Toys</h2>
          <Filter />
        </div>
      </>
    )
}
