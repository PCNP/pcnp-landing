import React from 'react'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Portfolio.module.sass'
import { MobilePortfolio } from './MobilePortfolio'


const example = require('src/common/images/index/portfolio/portfolioImage.svg')


export const Portfolio: React.FC<CommonBlockProps> = (props) => {
  const items = [
    {
      name: 'Я Юрист',
      description: 'сайт для малого бизнеса',
      image: example,
    },
    {
      name: 'Я Юрист',
      description: 'сайт для малого бизнеса',
      image: example,
    },
    {
      name: 'Я Юрист',
      description: 'сайт для малого бизнеса',
      image: example,
    },
  ]
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        cases
      </p>
      <h2 className={styles.mainTitle}>{ props.title }</h2>
      <MobilePortfolio />
      <div className={styles.content}>
        {
          items.map((el,i)=>{
            return (
              <div
                className={styles.item}
                key={i}
              >
                <p className={styles.itemTitle}>{ el.name }</p>
                <p className={styles.itemText}>{ el.description }</p>
                <img
                  className={styles.itemImage}
                  src={el.image}
                />
              </div>
            )
          })
        }
      </div>
      <Button
        href='/'
        btnType='outline'
      >
        { props.button }
      </Button>
    </div>
  )
}