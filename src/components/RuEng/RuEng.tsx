import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './RuEng.module.sass'


export const RuEng: React.FC = () => {
  const router = useRouter()
  const [curr, setCurr] = useState(router.asPath.split('/')[1])
  const handlerClick = (curr: string) => {
    setCurr(curr)
  }
  useEffect(()=>{
    handlerClick(router.asPath.split('/')[1])
  }, [router.asPath])

  return (
    <div className={styles.main}>
      <Link
        href={curr === 'en' ? router.asPath.split('/').filter((el) => el !== 'en').join('/') : router.asPath}
      >
        <a
          className={
            cn(
              styles.eng,
              curr !== 'en' ? styles.curr : ''
            )
          }
        >
          RU
        </a>
      </Link>
      <div className={styles.line} />
      <Link
        href={router.asPath.split('/')[1] === 'en' ? router.asPath : '/en' + router.asPath}
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