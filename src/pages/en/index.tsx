import React, { useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../../App/Main/Block1/Block1'
import { Services } from '../../App/Main/Services/Services'
import { WhyWe } from '../../App/Main/WhyWe/WhyWe'
import { Portfolio } from '../../App/Main/Portfolio/Portfolio'
import { WorkBlock } from '../../App/Main/WorkBlock/WorkBlock'
import { TechnologyBlock } from '../../App/Main/TechnologyBlock/TechnologyBlock'
import { ContactBlock } from '../../App/Main/ContactBlock/ContactBlock'
import { createIndexProps } from '../../store/lang/indexlang'
import { enDictionary } from '../../store/lang/dictionary'
import { items } from '../../store/portfolioItems'


const MainPage: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(()=>{
    document.documentElement.lang = 'en'
  },[])

  return (
    <>
      <Block1 {...props.block1} />
      <Services {...props.services} />
      <WhyWe {...props.whyWe} />
      <Portfolio
        {...props.portfolio}
        items={items}
        lang='en'
      />
      <WorkBlock {...props.workBlock} />
      <TechnologyBlock {...props.techBlock} />
      <ContactBlock {...props.contactBlock} />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  return { props: createIndexProps(enDictionary) }
}


export default MainPage