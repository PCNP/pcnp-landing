import React from 'react'


import { blockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './WhyWe.module.sass'


const diplom = require('src/common/images/index/whyWe/diplom.svg')
const date = require('src/common/images/index/whyWe/date.svg')
const apple2 = require('src/common/images/index/whyWe/apple2.svg')
const computer = require('src/common/images/index/whyWe/computer.png')


type OwnProps = {
  lang: blockWithItemsProps
}


export const WhyWe: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        choosing us
      </p>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ lang.title }</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={diplom} />
              </div>
              <h3 className={styles.itemTitle}>
                { lang.items[0].title }
              </h3>
              <p className={styles.itemText}>
                { lang.items[0].text }
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={date} />
              </div>
              <h3 className={styles.itemTitle}>
                { lang.items[1].title }
              </h3>
              <p className={styles.itemText}>
                { lang.items[1].text }
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={apple2} />
              </div>
              <h3 className={styles.itemTitle}>
                { lang.items[2].title }
              </h3>
              <p className={styles.itemText}>
                { lang.items[2].text }
              </p>
            </div>
          </div>
        </div>
        <div className={styles.computerBlock}>
          <img src={computer} />
        </div>
      </div>
    </div>
  )
}
