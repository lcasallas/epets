import React from 'react'
import Cards from './Card'
import '../assets/styles/components/ListOfCards.css'

export default function ListOfCards() {

  return (
    <section>
      <div>
        <h2>Juguetes destacados</h2>
      </div>
      <div className='cards'>
        <div className='cards__container'>
          <Cards color='toy'/>
        </div>
        <div className='cards__container'>
          <Cards color='food'/>
        </div>
        <div className='cards__container'>
          <Cards color='service'/>
        </div>
      </div>
    </section>

  )
}
