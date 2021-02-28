import React from 'react'


import { BlockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './WhyWe.module.sass'


const diplom = require('src/common/images/index/whyWe/diplom.svg')
const date = require('src/common/images/index/whyWe/date.svg')
const apple2 = require('src/common/images/index/whyWe/apple2.svg')
const computer = require('src/common/images/index/whyWe/computer.png')


export const WhyWe: React.FC<BlockWithItemsProps> = (props) => {
  const images = [diplom, date, apple2]

  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        choosing us
      </p>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ props.title }</h2>
          <div className={styles.items}>
            {
              props.items.map((el, i) => {
                return (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <div className={styles.imageBlock}>
                      <img src={images[i]} />
                    </div>
                    <h3 className={styles.itemTitle}>
                      { el.title }
                    </h3>
                    <p className={styles.itemText}>
                      { el.text }
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.computerBlock}>
          <img src={computer} />
        </div>
      </div>
    </div>
  )
}
