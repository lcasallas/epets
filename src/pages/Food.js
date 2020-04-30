import React from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';

class Food extends React.Component {
    render() {
        return(

            <>
            <Header />

            <div className={`cards__title`}>
                <h1>Hello my friend Food</h1>
                <Filter />

            </div>
            </>
        )
    }
}

export default Food;