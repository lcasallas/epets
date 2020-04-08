import React, {useEffect} from 'react'
import '../assets/styles/components/card.css'

export default function Cards({color}) {

// const arrayColor=[]
const type = {color}
// const totalColors = arrayColor.push(`${color}`)
// console.log(type.color)
// console.log(totalColors)

useEffect(() => {
  function addClassname() {
    document.getElementById('card__img--alt').classList.add(`${type.color}`)
    }
  return addClassname()
}, [])

return (
    <article className='card' id='card__img--alt'>
        <div className='card__img'>
          <img
            src='https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8B/F7/c0981454-3289-41d4-9638-88337b4600a0.jpg' alt='prueba' ></img>
        </div>
      <h3 className='card__title'>{color}</h3>
      <div className='card__text'>
        <p> Lorem Ipsum is simply dummy text of the print in
        gand type setting industry.Lorem Ipsum has been the
        industry’s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled
        ittomak eat y pespeci men book </p>
      </div>
    </article>
  )
}
