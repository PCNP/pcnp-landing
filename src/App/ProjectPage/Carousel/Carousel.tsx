import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import { LightBox } from 'src/components/LightBox/LightBox'
import { LeftArrow } from 'src/components/icons/LeftArrow'
import { SCREEN } from 'src/utils/tsUtils'
import { useScreenSize } from 'src/utils/hooksUtils'

import styles from './Carousel.module.sass'


type OwnProps = {
  sliderImages: string[]
  showLightBox?: boolean
}

export const CarouselBlock: React.FC<OwnProps> = ({ sliderImages, showLightBox = true }) => {
  const [curr, setCurr] = useState(1)

  const [lightBoxToggler, setLightBoxToggler] = useState(false)
  const [lightBoxSlideIndex, setLightBoxSlideIndex] = useState<number | undefined>(undefined)

  const prevSlide = () => {
    setCurr((curr - 1) < 0 ? sliderImages.length - 1 : curr - 1)
  }

  const nextSlide = () => {
    setCurr((curr + 1) % sliderImages.length)
  }

  const onCloseLightBox = () => {
    setLightBoxSlideIndex(undefined)
  }

  const setLightBoxSlide = (index: number) => {
    return () => {
      setLightBoxSlideIndex(index)
      setLightBoxToggler(!lightBoxToggler)
    }
  }

  const screen = useScreenSize()

  return (
    <div className={styles.main}>
      {
        showLightBox && (
          <LightBox
            images={sliderImages}
            slideIndex={lightBoxSlideIndex}
            toggler={lightBoxToggler}
            onClose={onCloseLightBox}
          />
        )
      }

      <CarouselProvider
        currentSlide={curr}
        naturalSlideWidth={40}
        naturalSlideHeight={10}
        isIntrinsicHeight
        totalSlides={sliderImages.length}
        visibleSlides={1}
        dragEnabled={screen < SCREEN.DESKTOP}
        className={styles.carouselBlock}
      >
        <Slider className={styles.carousel}>
          {
            sliderImages.map((el, i) => {
              return (
                <Slide
                  key={i}
                  index={i}
                  className={styles.item}
                  classNameHidden={styles.hidden}
                >
                  <img
                    src={el}
                    alt='slide image'
                    onClick={setLightBoxSlide(i)}
                    width={600}
                    height={360}
                  />
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>

      <div
        className={styles.arrowLeft}
        onClick={prevSlide}
      >
        <LeftArrow />
      </div>

      <div
        className={styles.arrowRight}
        onClick={nextSlide}
      >
        <LeftArrow />
      </div>
    </div>
  )
}