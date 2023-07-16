import CalBar from '@/components/CalBar'
import FoodContainer from '@/components/FoodContainer'
import TimeChanger from '@/components/TimeChanger'

import Image from 'next/image'

export default function Home() {
  return (
    <>
  <CalBar />
  <TimeChanger/>
  <FoodContainer name="Ingredients" StyleContainer='right-20 top-60'/>
  <FoodContainer name="Recipes" StyleContainer='left-96 top-96' />
  <FoodContainer name='Daily' haveAddButton={false} StyleContainer='left-20 top-40'/>

  </>
  )
}
