import React from 'react'
import FsLightBox from 'fslightbox-react'


type OwnProps = {
  sources: string[]
  slide?: number
  toggler: boolean
}

export const LightBox: React.FC<OwnProps> = (
  {
    sources,
    slide,
    toggler,
  }
) => {
  return (
    <FsLightBox
      toggler={toggler}
      sources={sources}
      slide={slide}
      type='image'
    />
  )
}
