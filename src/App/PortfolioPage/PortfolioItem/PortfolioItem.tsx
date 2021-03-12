import React from 'react'
import cn from 'classnames'

import { Button } from '../../../components/Button/Button'
import { item } from 'src/store/portfolioItems'


import styles from './PortfolioItem.module.sass'


type OwnProps = {
  str?: string
  bgType: string
  more: string
  lang: 'ru' | 'en'
}


export const PortfolioItem: React.FC<OwnProps & item> = (
  { lang, more, bgType, str = 'site', title, description, slug, mobImg, desktopImg }) => {
  return (
    <div
      className={
        cn(
          styles.main,
          bgType === 'light' ? styles.light : styles.dark
        )
      }
    >
      <div className={styles.wrapperBlock}>
        <p className={styles.backgroundText}>{ str }</p>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ title[lang] }</h2>
          <p className={styles.description}>{ description[lang] }</p>
          <img
            src={desktopImg}
            className={styles.mobVersionImg}
            alt='desktop image'
            width={350}
            height={210}
          />
          <Button
            href={`/portfolio/${slug}`}
            btnType='outline'
          >
            { more }
          </Button>
        </div>
        <div className={styles.rightBlock}>
          <img
            src={mobImg}
            className={styles.mobImg}
            alt='mobile image'
            width={217}
            height={100}
          />
          <img
            src={desktopImg}
            className={styles.desktopImg}
            alt='desktop image'
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
