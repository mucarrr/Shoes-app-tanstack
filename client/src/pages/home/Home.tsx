import { FC } from 'react'
import Hero from './Hero'
import List from './List'
import Buttons from './Buttons' 

const Home:FC = () => {
  return (
    <div >
      <Hero />
      <Buttons />
      <List />
      
    </div>
  )
}

export default Home