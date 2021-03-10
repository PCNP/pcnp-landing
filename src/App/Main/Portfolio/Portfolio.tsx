import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'
import { item } from '../../../store/portfolioItems'

import styles from './Portfolio.module.sass'
import { MobilePortfolio } from './MobilePortfolio'


type OwnProps = {
  items: item[]
}


export const Portfolio: React.FC<CommonBlockProps & OwnProps> = (props) => {
  const router = useRouter()

  const items = [props.items[0], props.items[1], props.items[2]]
  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''

  return (
    <div
      className={styles.main}
      id='portfolio'
    >
      <p className={styles.backgroundText}>
        cases
      </p>
      <h2 className={styles.mainTitle}>{ props.title }</h2>
      <MobilePortfolio
        items={items}
        pref={pref}
      />
      <div className={styles.content}>
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
                  />
                </a>
              </Link>
            )
          })
        }
      </div>
      <Button
        href='/portfolio'
        btnType='outline'
      >
        { props.button }
      </Button>
    </div>
  )
}