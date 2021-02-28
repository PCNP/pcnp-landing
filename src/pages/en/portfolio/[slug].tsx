import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { ContactBlock } from '../../../components/ContactBlock/ContactBlock'
import { Block1 } from '../../../App/ProjectPage/Block1/Block1'
import { item, items } from 'src/store/portfolioItems'
import { InformationBlock } from '../../../App/ProjectPage/InformationBlock/InformationBlock'
import { enDictionary } from '../../../store/lang/dictionary'
import { createSlugPortfolioProps } from '../../../store/lang/slugPortfolioLang'
import CarouselBlock from '../../../App/ProjectPage/CarouselBlock/CarouselBlock'


const Project: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const project: item = props.items.filter((el: item)=>el.slug === router.query.slug)[0]

  return (
    <>
      <Block1
        project={project}
        {...props.block1}
      />
      <CarouselBlock
        items={[1,2,3]}
        active={0}
        slideImages = {project.slideImages}
      />
      <InformationBlock
        projects={props.items}
        project={project}
        length={props.items.length}
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
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...createSlugPortfolioProps(enDictionary), items,
    },
  }
}

export default Project