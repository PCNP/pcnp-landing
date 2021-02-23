import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './RuEng.module.sass'


export const RuEng: React.FC = () => {
  const router = useRouter()
  const [curr, setCurr] = useState('ru')

  const handlerClick = (curr: string) => {
    setCurr(curr)
  }

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
          onClick={
            ()=>{
              handlerClick('ru')
            }
          }
        >
          RU
        </a>
      </Link>
      <div className={styles.line} />
      <Link
        href={router.asPath}
        locale='en-US'
      >
        <a
          className={
            cn(
              styles.eng,
              curr === 'en' ? styles.curr : ''
            )
          }
          onClick={
            ()=>{
              handlerClick('en')
            }
          }
        >
          ENG
        </a>
      </Link>
    </div>
  )
}