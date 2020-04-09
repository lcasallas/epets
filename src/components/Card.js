import React from 'react'
import '../assets/styles/components/card.css'

export default function Card({data, color}) {

return (
    <article className={`card ${color}`} id='card__img--alt'>
        <div className='card__img'>
          <img src={data.photo} alt={data.name} />
        </div>
      <h3 className='card__title'>{data.name}</h3>
      <div className='card__text'>
        <p> {data.body}</p>
      </div>
      <div className='card__link'>
        <a href={data.link} target="_blank" > {data.linkShow}</a>
      </div>
    </article>
  )
}
