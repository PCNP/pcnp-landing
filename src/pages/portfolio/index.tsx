import React from 'react'

import { Block1 } from '../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../App/PortfolioPage/PortfolioItem/PortfolioItem'


const mob = require('src/common/images/portfolioPage/items/item_1/mob.svg')
const desktop = require('src/common/images/portfolioPage/items/item_1/desktop.svg')


type item = {
  type?: string
  title: string
  description: string
  href: string
  mobImg: any
  desktopImg: any
}


const PortfolioPage: React.FC = () => {
  const items: item[] = [
    {
      href: '/',
      title: 'Я юрист',
      description: 'Разработка мобильного приложения',
      mobImg: mob,
      desktopImg: desktop,
      type: 'site',
    },
    {
      href: '/',
      title: 'Я юрист',
      description: 'Разработка мобильного приложения',
      mobImg: mob,
      desktopImg: desktop,
      type: 'app',
    },
    {
      href: '/',
      title: 'Я юрист',
      description: 'Разработка мобильного приложения',
      mobImg: mob,
      desktopImg: desktop,
      type: 'site',
    },
    {
      href: '/',
      title: 'Я юрист',
      description: 'Разработка мобильного приложения',
      mobImg: mob,
      desktopImg: desktop,
      type: 'app',
    },
  ]
  return (
    <>
      <Block1 />
      {
        items.map((el, i)=>(
          <PortfolioItem
            {...el}
            key={i}
          />
        ))
      }
      <ContactBlock />
    </>
  )
}

export default PortfolioPage