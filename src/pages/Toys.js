import React, { useEffect } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
/* import '../assets/styles/Header.css'; */

export default function Toys() {

    useEffect(() => {
      async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
      }

      getData()
    }, [])

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
