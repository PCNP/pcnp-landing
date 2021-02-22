import React, { useState } from 'react'
import cn from 'classnames'

import styles from './RuEng.module.sass'


export const RuEng: React.FC = () => {
  const [curr, setCurr] = useState('ru')

  const handlerClick = (curr: string) => {
    setCurr(curr)
  }

  return (
    <div className={styles.main}>
      <div
        className={
          cn(
            styles.ru,
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
      </div>
      <div className={styles.line} />
      <div
        className={
          cn(
            styles.eng,
            curr === 'eng' ? styles.curr : ''
          )
        }
        onClick={
          ()=>{
            handlerClick('eng')
          }
        }
      >
        ENG
      </div>
    </div>
  )
}