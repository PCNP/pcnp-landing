import React from 'react'

import { Button } from '../../../components/Button/Button'

import styles from './Portfolio.module.sass'
import { MobilePortfolio } from './MobilePortfolio'


const example = require('src/common/images/index/portfolio/portfolioImage.png')


export const Portfolio: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        cases
      </p>
      <h2 className={styles.mainTitle}>Портфолио</h2>
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
        Все проекты
      </Button>
    </div>
  )
}