import React from 'react'

import { CommonBlockProps } from '../../../store/lang/indexlang'
import { technologies } from 'src/store/technologies'

import styles from './TechnologyBlock.module.sass'


export const TechnologyBlock: React.FC<CommonBlockProps> = (props) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (
    <div
      className={styles.main}
      id='technologies'
    >
      <p className={styles.backgroundText}>
        technology
      </p>
      <h2 className={styles.mainTitle}>{ props.title }</h2>
      <p className={styles.slogan}>{ props.slogan }</p>
      <div className={styles.content}>
        {
          array.map( (el) => {
            return (
              <div
                className={styles.item}
                key={el}
              >
                <img
                  src={technologies[el].img}
                  className={styles.itemImage}
                  alt={technologies[el].name}
                />
                <p className={styles.itemName}>{ technologies[el].name }</p>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}