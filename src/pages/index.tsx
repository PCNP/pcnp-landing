import React from 'react'

import { Block1 } from '../App/Main/Block1/Block1'
import { Services } from '../App/Main/Services/Services'
import { WhyWe } from '../App/Main/WhyWe/WhyWe'


const MainPage: React.FC = () => {
  return (
    <>
      <Block1 />
      <Services />
      <WhyWe />
    </>
  )
}

export default MainPage