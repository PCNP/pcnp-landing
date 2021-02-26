import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './RuEng.module.sass'


export const RuEng: React.FC = () => {
  const router = useRouter()
  const [curr, setCurr] = useState(router.locale)

  const handlerClick = (curr: string | undefined) => {
    setCurr(curr)
  }
  useEffect(()=>{
    handlerClick(router.locale)
  }, [router.locale])

  return (
    <div className={styles.main}>
      <Link
        href={router.asPath}
        locale='ru'
      >
        <a
          className={
            cn(
              styles.eng,
              curr === 'ru' ? styles.curr : ''
            )
          }
        >
          RU
        </a>
      </Link>
      <div className={styles.line} />
      <Link
        href={router.asPath}
        locale='en'
      >
        <a
          className={
            cn(
              styles.eng,
              curr === 'en' ? styles.curr : ''
            )
          }
        >
          ENG
        </a>
      </Link>
    </div>
  )
}