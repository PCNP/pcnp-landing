import React from 'react'
import Link from 'next/link'

import { item } from '../../../store/portfolioItems'

import styles from './MobilePortfolio.module.sass'


type OwnProps = {
  items: item[]
  pref: string
  lang: 'ru' | 'en'
}


export const MobilePortfolio: React.FC<OwnProps> = ({ pref, items, lang }) => {
  return (
    <div className={styles.carousel}>
      {
        items.map((el,i)=>{
          return (
            <Link
              href={pref + '/portfolio/' + el.slug}
              key={i}
            >
              <a
                className={styles.item}
              >
                <p className={styles.itemTitle}>{ el.title[lang] }</p>
                <p className={styles.itemText}>{ el.description[lang] }</p>
                <img
                  className={styles.itemImage}
                  src={el.desktopImg}
                  alt={el.title[lang]}
                  width={240}
                  height={144}
                />
              </a>
            </Link>
          )
        })
      }
    </div>
  )
}