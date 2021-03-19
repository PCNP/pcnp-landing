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
  lang: 'ru' | 'en'
}


export const Portfolio: React.FC<CommonBlockProps & OwnProps> = (props) => {
  const router = useRouter()

  const items = props.items.filter((el) => el.showInMainPage)
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
        lang={props.lang}
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
                  <p className={styles.itemTitle}>{ el.title[props.lang] }</p>
                  <p className={styles.itemText}>{ el.description[props.lang] }</p>
                  <img
                    className={styles.itemImage}
                    src={el.desktopImg}
                    alt={el.title[props.lang]}
                    width={300}
                    height={180}
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