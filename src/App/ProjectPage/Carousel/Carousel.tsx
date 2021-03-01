import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'


import styles from './Carousel.module.sass'


type OwnProps = {
  slideImages: any[]
}

export const CarouselBlock: React.FC<OwnProps> = ({ slideImages }) => {
  const [curr, setCurr] = useState(1)

  const prevSlide = () => {
    setCurr((curr - 1) < 0 ? slideImages.length - 1 : curr - 1)
  }

  const nextSlide = () => {
    setCurr((curr + 1) % slideImages.length)
  }

  return (
    <div className={styles.main}>
      <CarouselProvider
        currentSlide={curr}
        naturalSlideWidth={40}
        naturalSlideHeight={10}
        isIntrinsicHeight
        totalSlides={slideImages.length}
        visibleSlides={1}
        touchEnabled
        className={styles.carouselBlock}
      >
        <Slider className={styles.carousel}>
          {
            slideImages.map((el, i) => {
              return (
                <Slide
                  key={i}
                  index={i}
                  className={styles.item}
                  classNameHidden={styles.hidden}
                >
                  <img src={el} />
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>
      <div className={styles.arrowsBlock}>
        <div
          className={styles.arrowLeft}
          onClick={prevSlide}
        />
        <div
          className={styles.arrowRight}
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}