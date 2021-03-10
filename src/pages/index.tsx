import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { Block1 } from '../App/Main/Block1/Block1'
import { Services } from '../App/Main/Services/Services'
import { WhyWe } from '../App/Main/WhyWe/WhyWe'
import { Portfolio } from '../App/Main/Portfolio/Portfolio'
import { WorkBlock } from '../App/Main/WorkBlock/WorkBlock'
import { TechnologyBlock } from '../App/Main/TechnologyBlock/TechnologyBlock'
import { ContactBlock } from '../App/Main/ContactBlock/ContactBlock'
import { createIndexProps } from '../store/lang/indexlang'
import { ruDictionary } from '../store/lang/dictionary'
import { items } from './../store/portfolioItems'
import { FormScripts } from '../components/FormScripts/FormScripts'


const MainPage: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const support = useWebPSupportCheck()

  return (
    <>
      <Block1
        support={support}
        {...props.block1}
      />
      <Services {...props.services} />
      <WhyWe {...props.whyWe} />
      <Portfolio
        {...props.portfolio}
        items={items}
      />
      <WorkBlock
        {...props.workBlock}
      />
      <TechnologyBlock {...props.techBlock} />
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
  return { props: createIndexProps(ruDictionary) }
}


export default MainPage