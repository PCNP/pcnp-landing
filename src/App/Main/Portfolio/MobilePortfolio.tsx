import React from 'react'
import Link from 'next/link'

import { item } from '../../../store/portfolioItems'

import styles from './MobilePortfolio.module.sass'


type OwnProps = {
  items: item[]
}


export const MobilePortfolio: React.FC<OwnProps> = ({ items }) => {
  return (
    <div className={styles.carousel}>
      {
        items.map((el,i)=>{
          return (
            <Link
              href={'/portfolio/' + el.slug}
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
                />
              </a>
            </Link>
          )
        })
      }
    </div>
  )
}