import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { ContactBlock } from '../../App/ProjectPage/ContactBlock/ContactBlock'
import { Block1 } from '../../App/ProjectPage/Block1/Block1'
import { item, items } from 'src/store/portfolioItems'
import { InformationBlock } from '../../App/ProjectPage/InformationBlock/InformationBlock'
import { ruDictionary } from '../../store/lang/dictionary'
import { createSlugPortfolioProps } from '../../store/lang/slugPortfolioLang'
import { CarouselBlock } from '../../App/ProjectPage/Carousel/Carousel'


const Project: React.FC = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const project: item = items.filter((el)=>el.slug === router.query.slug)[0]

  useEffect(()=>{
    document.documentElement.lang = 'ru'
  },[])

  return (
    <>
      <Block1
        project={project}
        {...props.block1}
        lang='ru'
      />
      <CarouselBlock
        sliderImages = {project.slideImages}
        showLightBox
      />
      <InformationBlock
        projects={items}
        project={project}
        length={items.length}
        {...props.aboutBlock}
        lang='ru'
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
  return { props: createSlugPortfolioProps(ruDictionary) }
}

export default Project