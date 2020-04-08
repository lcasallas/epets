import React, {useEffect} from 'react'
import '../assets/styles/components/card.css'

export default function Card({color, subTitle}) {

return (
    <article className={`card ${color}`} id='card__img--alt'>
        <div className='card__img'>
          <img
            src='https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg' alt='prueba' ></img>
        </div>
      <h3 className='card__title'>{subTitle}</h3>
      <div className='card__text'>
        <p> Lorem Ipsum is simply dummy text of the print in
        gand type setting industry.Lorem Ipsum has been the
        industry’s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled
        it toma k eat y pespeci men book </p>
      </div>
    </article>
  )
}
