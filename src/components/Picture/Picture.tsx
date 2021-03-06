import React from 'react'


type OptimizadeImage = {
  images: Array<{path: string, width: number, height: number}>
  src: string
  width: number
  height: number
}

type OwnProps = {
  imgClassName?: string
  image: OptimizadeImage
  imageWebp: OptimizadeImage
  imageMimeType: string
  minWidths: number[]
  imgAlt?: string
}


export const Picture: React.FC<OwnProps> = ({ imgAlt, image, imageMimeType, imageWebp, imgClassName, minWidths }) => {
  return (
    <picture>
      {
        imageWebp.images.map((img, i) => {
          return (
            <source
              key={img.path}
              srcSet={img.path}
              className={imgClassName}
              media={`{min-width: ${minWidths[i]}px}`}
              type={imageMimeType}
            />
          )
        })
      }
      {
        image.images.map((img, i) => {
          return (
            <source
              key={img.path}
              srcSet={img.path}
              className={imgClassName}
              media={`{min-width: ${minWidths[i]}px}`}
              type={imageMimeType}
            />
          )
        })
      }
      <img
        src={image.src}
        alt={imgAlt}
        className={imgClassName}
      />
    </picture>
  )
}