import React from 'react'

import styles from './MobilePortfolio.module.sass'


const example = require('src/common/images/index/portfolio/portfolioImage.png')


export const MobilePortfolio: React.FC = () => {
  return (
    <div className={styles.carousel}>
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
  )
}