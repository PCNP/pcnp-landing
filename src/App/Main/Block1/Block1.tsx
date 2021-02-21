import React from 'react'

import { Button } from '../../../components/Button/Button'

import styles from './Block1.module.sass'


export const Block1: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.blockTitle}>
          Студия разработки сайтов
          <br />
          и мобильных приложений
        </h1>
        <p className={styles.slogan}>
          Быстро, качественно, достойно!
        </p>
        <Button href='/'>Начать проект</Button>
      </div>
    </div>
  )
}
