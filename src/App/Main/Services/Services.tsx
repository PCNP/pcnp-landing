import React from 'react'

import { blockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './Services.module.sass'


const chrome = require('src/common/images/index/services/chrome.svg')
const apple = require('src/common/images/index/services/apple.svg')
const greenMan = require('src/common/images/index/services/greenMan.svg')
const colors = require('src/common/images/index/services/color-palette.svg')
const telegram = require('src/common/images/index/services/telegram.svg')
const whatsapp = require('src/common/images/index/services/whatsapp.svg')


type OwnProps = {
  lang: blockWithItemsProps
}

export const Services: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        we offer
      </p>
      <h2 className={styles.servicesTitle}>{ lang.title }</h2>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={chrome} />
          </div>
          <h3 className={styles.itemTitle}>{ lang.items[0].title }</h3>
          <p className={styles.itemText}>
            { lang.items[0].text }
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={apple} />
            <img src={greenMan} />
          </div>
          <h3 className={styles.itemTitle}>{ lang.items[1].title }</h3>
          <p className={styles.itemText}>
            { lang.items[1].text }
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={colors} />
          </div>
          <h3 className={styles.itemTitle}>{ lang.items[2].title }</h3>
          <p className={styles.itemText}>
            { lang.items[2].text }
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={telegram} />
            <img src={whatsapp} />
          </div>
          <h3 className={styles.itemTitle}>{ lang.items[3].title }</h3>
          <p className={styles.itemText}>
            { lang.items[3].text }
          </p>
        </div>
      </div>
    </div>
  )
}
