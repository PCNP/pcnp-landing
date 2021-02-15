import React from 'react'

import {Block1} from "../components/MainPage/Block1/Block1"
import {Services} from "../components/MainPage/Services/Services";
import {WhyWe} from "../components/MainPage/WhyWe/WhyWe";


const MainPage: React.FC = () => {
  return (
      <React.Fragment>
        <Block1/>
        <Services/>
        <WhyWe/>
      </React.Fragment>
  )
}

export default MainPage