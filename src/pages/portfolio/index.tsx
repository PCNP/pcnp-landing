import React, { useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../../App/PortfolioPage/Block1/Block1'
import { ContactBlock } from '../../App/PortfolioPage/ContactBlock/ContactBlock'
import { PortfolioItem } from '../../App/PortfolioPage/PortfolioItem/PortfolioItem'
import { items } from '../../store/portfolioItems'
import { ruDictionary } from '../../store/lang/dictionary'
import { createPortfolioIndexProps } from '../../store/lang/indexPortfolioLang'


const PortfolioPage: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(()=>{
    document.documentElement.lang = 'ru'
  },[])

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
              lang='ru'
            />
          )
        })
      }
      <ContactBlock {...props.contactBlock} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: createPortfolioIndexProps(ruDictionary) }
}

export default PortfolioPage