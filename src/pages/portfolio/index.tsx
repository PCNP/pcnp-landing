import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../App/PortfolioPage/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../App/PortfolioPage/PortfolioItem/PortfolioItem'
import { items } from '../../store/portfolioItems'
import { ruDictionary } from '../../store/lang/dictionary'
import { createPortfolioIndexProps } from '../../store/lang/indexPortfolioLang'
import { FormScripts } from '../../components/FormScripts/FormScripts'


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
      {
        process.env.NODE_ENV === 'production' && (
          <FormScripts />
        )
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: createPortfolioIndexProps(ruDictionary) }
}

export default PortfolioPage