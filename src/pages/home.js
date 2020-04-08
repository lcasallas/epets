import React, {useContext} from 'react'
import ListOfCards from '../components/ListOfCards'
import InformationContext from '../Context/Information'

export default function Home() {
  const information = useContext(InformationContext)

  return (
    <section>
    {information.sections.map((typeOfProduct)=>{
      return(
        <ListOfCards key={typeOfProduct.color}
        color={typeOfProduct.color}
        title={typeOfProduct.title}
        subtitle={[typeOfProduct.subTitles]}
        />
      )
    })
    }
    </section>
  )
}
