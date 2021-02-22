import React from 'react'

import { Block1 } from '../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../App/PortfolioPage/PortfolioItem/PortfolioItem'
import { items } from '../../components/store/portfolioItems'


const PortfolioPage: React.FC = () => {
  return (
    <>
      <Block1 />
      {
        items.map((el, i) => {
          const bgType = i % 2 ? 'dark' : 'light'

          return (
            <PortfolioItem
              {...el}
              bgType={bgType}
              key={i}
            />
          )
        })
      }
      <ContactBlock />
    </>
  )
}

export default PortfolioPage