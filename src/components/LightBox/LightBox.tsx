import React from 'react'
import FsLightBox from 'fslightbox-react'


type OwnProps = {
  images: string[]
  slide?: number
  toggler: boolean
  onClose: ()=>void
}

export const LightBox: React.FC<OwnProps> = (
  {
    images,
    slide,
    toggler,
    onClose,
  }
) => {
  return (
    <FsLightBox
      toggler={toggler}
      slide={slide}
      sources={images}
      type='image'
      onClose={onClose}
    />
  )
}
