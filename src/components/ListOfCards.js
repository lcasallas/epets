import React, {useContext} from 'react'
import Card from './Card'
import '../assets/styles/components/ListOfCards.css'
import InformationContext from '../Context/Information'

export default function ListOfCards({color, title }) {
  const information = useContext(InformationContext)
  console.log(information)
  return (
    <section>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='cards'>
        {information.sections.map(item=>{

          <div className='cards__container'>
            <Card color={color} subTitle='ss' />
          </div>
        })
        }
      </div>
    </section>

  )
}
