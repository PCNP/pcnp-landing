import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Block1 } from '../App/Main/Block1/Block1'
import { Services } from '../App/Main/Services/Services'
import { WhyWe } from '../App/Main/WhyWe/WhyWe'
import { Portfolio } from '../App/Main/Portfolio/Portfolio'
import { WorkBlock } from '../App/Main/WorkBlock/WorkBlock'
import { TechnologyBlock } from '../App/Main/TechnologyBlock/TechnologyBlock'
import { ContactBlock } from '../components/ContactBlock/ContactBlock'
import { createIndexProps } from '../store/lang/indexlang'
import { Dictionary, enDictionary, ruDictionary } from '../store/lang/dictionary'


const MainPage: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Block1 lang={props.block1} />
      <Services lang={props.services} />
      <WhyWe lang={props.whyWe} />
      <Portfolio lang={props.portfolio} />
      <WorkBlock lang={props.workBlock} />
      <TechnologyBlock lang={props.techBlock} />
      <ContactBlock lang={props.contactBlock} />
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let dictionary: Dictionary = ruDictionary
  if(locale === 'en'){
    dictionary = enDictionary
  }
  return { props: createIndexProps(dictionary) }
}


export default MainPage