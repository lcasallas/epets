import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';

class Toys extends React.Component {
    render() {
        return(
            <>
            <Header />
            <div className={`cards__title`}>
            <h2>Hello Toys</h2>
            <Filter />
            </div>
            </>
        )
    }
};

export default Toys;