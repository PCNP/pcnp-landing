import React from 'react'

import { Block1 } from '../App/Main/Block1/Block1'
import { Services } from '../App/Main/Services/Services'
import { WhyWe } from '../App/Main/WhyWe/WhyWe'
import { Portfolio } from '../App/Main/Portfolio/Portfolio'
import { WorkBlock } from '../App/Main/WorkBlock/WorkBlock'
import { TechnologyBlock } from '../App/Main/TechnologyBlock/TechnologyBlock'
import { ContactBlock } from '../App/Main/ContactBlock/ContactBlock'


const MainPage: React.FC = () => {
  return (
    <>
      <Block1 />
      <Services />
      <WhyWe />
      <Portfolio />
      <WorkBlock />
      <TechnologyBlock />
      <ContactBlock />
    </>
  )
}

export default MainPage