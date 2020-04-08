import React, {useContext} from 'react'
import ListOfCards from '../components/ListOfCards'
import ColorContext from '../Context/Colors'

export default function Home() {
const colors=useContext(ColorContext)
console.log(colors)
  return (
    <div>
      <ListOfCards style={{ backgroundColor: colors.blueT }}/>
      <ListOfCards style={{ backgroundColor: colors.blueT }} />
      <ListOfCards style={{ backgroundColor: colors.blueT }} />
    </div>
  )
}
