import React from 'react';
import Header from '../components/Header';

class Toys extends React.Component {
    render() {
        return(
            <>
            <Header />
            <div className={`cards__title`}>
            <h2>Hello Toys</h2>
            </div>
            </>
        )
    }
};

export default Toys;