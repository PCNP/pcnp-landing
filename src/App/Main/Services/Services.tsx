import React from 'react'

import { BlockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './Services.module.sass'


const chrome = require('src/common/images/index/services/chrome.svg')
const apple = require('src/common/images/index/services/apple.svg')
const greenMan = require('src/common/images/index/services/greenMan.svg')
const colors = require('src/common/images/index/services/color-palette.svg')
const telegram = require('src/common/images/index/services/telegram.svg')
const whatsapp = require('src/common/images/index/services/whatsapp.svg')


type OwnProps = {
  lang: BlockWithItemsProps
}

export const Services: React.FC<OwnProps> = ({ lang }) => {
  const images = [
    { images: [chrome] },
    { images: [apple, greenMan] },
    { images: [colors] },
    { images: [telegram, whatsapp] },
  ]
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        we offer
      </p>
      <h2 className={styles.servicesTitle}>{ lang.title }</h2>
      <div className={styles.content}>
        {
          lang.items.map((el,index)=>{
            return (
              <div
                className={styles.item}
                key={index}
              >
                <div className={styles.imageBlock}>
                  {
                    images[index].images.map((img, i) => (
                      <img
                        src={img}
                        key={i}
                      />
                    ))
                  }
                </div>
                <h3 className={styles.itemTitle}>{ el.title }</h3>
                <p className={styles.itemText}>
                  { el.text }
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
