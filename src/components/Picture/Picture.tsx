import React from 'react'


type OwnProps = {
  imgClassName?: string
  image: any
  imageWebp: any
  imageMimeType: string
  imgAlt?: string
}


export const Picture: React.FC<OwnProps> = ({ imgAlt, image, imageMimeType, imageWebp, imgClassName }) => {
  return (
    <picture>
      <source
        srcSet={imageWebp}
        className={imgClassName}
        type={imageMimeType}
      />
      <source
        srcSet={image}
        className={imgClassName}
        type={imageMimeType}
      />
      <img
        src={image}
        alt={imgAlt}
        className={imgClassName}
      />
    </picture>
  )
}