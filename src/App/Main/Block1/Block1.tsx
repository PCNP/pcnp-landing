import React from 'react'

import { Button } from '../../../components/Button/Button'

import styles from './Block1.module.sass'


export const Block1: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.blockTitle}>
          СТУДИЯ РАЗРАБОТКИ САЙТОВ
          <br />
          И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
        </h1>
        <p className={styles.slogan}>
          Быстро, качественно, достойно!
        </p>
        <Button href='/'>Начать проект</Button>
      </div>
    </div>
  )
}
