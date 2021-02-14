import React from 'react'

import {Block1} from "../components/MainPage/Block1/Block1";
import {MainLayout} from "../components/MainLayout/MainLayout";


const MainPage: React.FC = () => {
  return (
      <MainLayout>
        <Block1/>
      </MainLayout>
  )
}

export default MainPage