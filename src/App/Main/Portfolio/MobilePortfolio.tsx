import React from 'react'
import Link from 'next/link'

import { item } from '../../../store/portfolioItems'

import styles from './MobilePortfolio.module.sass'


type OwnProps = {
  items: item[]
  pref: string
}


export const MobilePortfolio: React.FC<OwnProps> = ({ pref, items }) => {
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
                <p className={styles.itemTitle}>{ el.title }</p>
                <p className={styles.itemText}>{ el.description }</p>
                <img
                  className={styles.itemImage}
                  src={el.desktopImg}
                  alt={el.title}
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