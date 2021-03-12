import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { ContactBlock } from '../../../App/ProjectPage/ContactBlock/ContactBlock'
import { Block1 } from '../../../App/ProjectPage/Block1/Block1'
import { item, items } from 'src/store/portfolioItems'
import { InformationBlock } from '../../../App/ProjectPage/InformationBlock/InformationBlock'
import { enDictionary } from '../../../store/lang/dictionary'
import { createSlugPortfolioProps } from '../../../store/lang/slugPortfolioLang'
import { CarouselBlock } from '../../../App/ProjectPage/Carousel/Carousel'


const Project: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const project: item = props.items.filter((el: item)=>el.slug === router.query.slug)[0]

  useEffect(()=>{
    document.documentElement.lang = 'en'
  },[])

  return (
    <>
      <Block1
        project={project}
        {...props.block1}
        lang='en'
      />
      <CarouselBlock
        sliderImages = {project.slideImages}
        showLightBox
      />
      <InformationBlock
        projects={props.items}
        project={project}
        length={props.items.length}
        {...props.aboutBlock}
        lang='en'
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