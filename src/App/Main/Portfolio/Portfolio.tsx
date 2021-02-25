import React from 'react'

import { Button } from '../../../components/Button/Button'
import { commonBlockProps } from '../../../store/lang/indexlang'

import styles from './Portfolio.module.sass'
import { MobilePortfolio } from './MobilePortfolio'


const example = require('src/common/images/index/portfolio/portfolioImage.svg')


type OwnProps = {
  lang: commonBlockProps
}


export const Portfolio: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        cases
      </p>
      <h2 className={styles.mainTitle}>{ lang.title }</h2>
      <MobilePortfolio />
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.itemTitle}>Я Юрист</p>
          <p className={styles.itemText}>сайт для малого бизнеса</p>
          <img
            className={styles.itemImage}
            src={example}
          />
        </div>
        <div className={styles.item}>
          <p className={styles.itemTitle}>Я Юрист</p>
          <p className={styles.itemText}>мобильное приложение</p>
          <img
            className={styles.itemImage}
            src={example}
          />
        </div>
        <div className={styles.item}>
          <p className={styles.itemTitle}>Я Юрист</p>
          <p className={styles.itemText}>сайт для малого бизнеса</p>
          <img
            className={styles.itemImage}
            src={example}
          />
        </div>
      </div>
      <Button
        href='/'
        btnType='outline'
      >
        { lang.button }
      </Button>
    </div>
  )
}