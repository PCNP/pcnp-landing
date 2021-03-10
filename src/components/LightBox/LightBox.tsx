import React from 'react'
import FsLightBox from 'fslightbox-react'


type OwnProps = {
  images: string[]
  slideIndex?: number
  toggler: boolean
  onClose: () => void
}

export const LightBox: React.FC<OwnProps> = (
  {
    images,
    slideIndex,
    toggler,
    onClose,
  }
) => {
  return (
    <FsLightBox
      toggler={toggler}
      sourceIndex={slideIndex}
      sources={images}
      type='image'
      onClose={onClose}
    />
  )
}
