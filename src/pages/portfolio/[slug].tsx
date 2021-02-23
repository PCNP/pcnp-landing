import React from 'react'
import { useRouter } from 'next/router'

import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { Block1 } from '../../App/ProjectPage/Block1/Block1'
import { item, items } from 'src/store/portfolioItems'
import { CarouselBlock } from '../../App/ProjectPage/CarouselBlock/CarouselBlock'
import { InformationBlock } from '../../App/ProjectPage/InformationBlock/InformationBlock'


const Project: React.FC = () => {
  const router = useRouter()
  const project: item = items[Number(router.query.slug)]
  return (
    <>
      <Block1 project={project} />
      <CarouselBlock />
      <InformationBlock
        project={project}
        length={items.length}
      />
      <ContactBlock />
    </>
  )
}

export default Project