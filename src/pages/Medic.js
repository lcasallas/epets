import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';


class Medic extends React.Component {
    render() {
        return(
            <>
            <Header />
            <div className={`cards__title`}>
                <h1>Hello My friend Medic</h1>
                <Filter />
            </div>

            </>

        )
    }
}

export default Medic;