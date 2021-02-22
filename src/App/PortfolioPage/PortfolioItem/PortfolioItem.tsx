import React from 'react'
import cn from 'classnames'

import { Button } from '../../../components/Button/Button'


import styles from './PortfolioItem.module.sass'


type OwnProps = {
  str?: string
  title: string
  description: string
  slug: string
  mobImg: any
  desktopImg: any
  bgType: string
}


export const PortfolioItem: React.FC<OwnProps> = (
  { bgType, str = 'site', title, description, slug, mobImg, desktopImg }) => {
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
          <h2 className={styles.mainTitle}>{ title }</h2>
          <p className={styles.description}>{ description }</p>
          <img
            src={desktopImg}
            className={styles.mobVersionImg}
          />
          <Button
            href={`portfolio/${slug}`}
            btnType='outline'
          >
            Подробнее
          </Button>
        </div>
        <div className={styles.rightBlock}>
          <img
            src={mobImg}
            className={styles.mobImg}
          />
          <img
            src={desktopImg}
            className={styles.desktopImg}
          />
        </div>
      </div>
    </div>
  )
}
