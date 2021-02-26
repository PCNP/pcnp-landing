import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { Block1 } from '../../App/ProjectPage/Block1/Block1'
import { item, items } from 'src/store/portfolioItems'
import { InformationBlock } from '../../App/ProjectPage/InformationBlock/InformationBlock'
import { Dictionary, enDictionary, ruDictionary } from '../../store/lang/dictionary'
import { createSlugPortfolioProps } from '../../store/lang/slugPortfolioLang'
import CarouselBlock from '../../App/ProjectPage/CarouselBlock/CarouselBlock'


const Project: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const project: item = items.filter((el)=>el.slug === router.query.slug)[0]
  return (
    <>
      <Block1
        project={project}
        {...props.block1}
      />
      <CarouselBlock
        items={[1,2,3]}
        active={0}
      />
      <InformationBlock
        projects={items}
        project={project}
        length={items.length}
        {...props.aboutBlock}
      />
      <ContactBlock {...props.contactBlock} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = items.map((el)=>{
    return { params: { slug: el.slug } }
  })
  return {
    paths,
    fallback: true,
  }
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let dictionary: Dictionary = ruDictionary
  if(locale === 'en'){
    dictionary = enDictionary
  }
  return { props: createSlugPortfolioProps(dictionary) }
}

export default Project