import React from 'react'
import Card from './Card'
import '../assets/styles/components/ListOfCards.css'

export default function ListOfCards({color, title, subtitle, id }) {
return (
  <section>
    <div className={`cards__title ${id}`}>
      <h2>{title}</h2>
    </div>
    <div className='cards'>
      {subtitle.map(item=>{
        return(
            item.map((dataCard)=>{
              return (
                <div key={dataCard.name} className='cards__container'>
                  <Card color={color} data={dataCard} />
                </div>
              )
            })
        )
      })
      }
    </div>
  </section>
)
}
