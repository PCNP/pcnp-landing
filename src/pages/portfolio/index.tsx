import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../App/PortfolioPage/PortfolioItem/PortfolioItem'
import { items } from '../../store/portfolioItems'
import { Dictionary, enDictionary, ruDictionary } from '../../store/lang/dictionary'
import { createPortfolioIndexProps } from '../../store/lang/indexPortfolioLang'


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
            />
          )
        })
      }
      <ContactBlock {...props.contactBlock} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let dictionary: Dictionary = ruDictionary
  if(locale === 'en'){
    dictionary = enDictionary
  }
  return { props: createPortfolioIndexProps(dictionary) }
}

export default PortfolioPage