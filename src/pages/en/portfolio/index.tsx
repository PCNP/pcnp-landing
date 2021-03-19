import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../../App/PortfolioPage/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../../App/PortfolioPage/PortfolioItem/PortfolioItem'
import { items } from '../../../store/portfolioItems'
import { enDictionary } from '../../../store/lang/dictionary'
import { createPortfolioIndexProps } from '../../../store/lang/indexPortfolioLang'


const PortfolioPage: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Block1 {...props.portfolio} />
      {
        items.map((el, i) => {
          const bgType = i % 2 ? 'dark' : 'light'

          return (
            <PortfolioItem
              {...props.itemBlock}
              {...el}
              bgType={bgType}
              key={i}
              lang='en'
            />
          )
        })
      }
      <ContactBlock {...props.contactBlock} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: createPortfolioIndexProps(enDictionary) }
}

export default PortfolioPage