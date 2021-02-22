import React from 'react'
import cn from 'classnames'

import { Button } from '../../../components/Button/Button'

import styles from './PortfolioItem.module.sass'


type OwnProps = {
  type?: string
  title: string
  description: string
  href: string
  mobImg: any
  desktopImg: any
}


export const PortfolioItem: React.FC<OwnProps> = ({ type = 'site', title, description, href, mobImg, desktopImg }) => {
  return (
    <div
      className={
        cn(
          styles.main,
          type === 'site' ? styles.site : styles.app
        )
      }
    >
      <div className={styles.wrapperBlock}>
        <p className={styles.backgroundText}>{ type === 'site' ? 'Site' : 'App' }</p>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ title }</h2>
          <p className={styles.description}>{ description }</p>
          <img
            src={desktopImg}
            className={styles.mobVersionImg}
          />
          <Button
            href={href}
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