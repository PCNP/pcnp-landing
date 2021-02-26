import React from 'react'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


type OwnProps = {
  lang: CommonBlockProps
}

export const Block1: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.blockTitle}>
          { lang.title }
        </h1>
        <p className={styles.slogan}>
          { lang.slogan }
        </p>
        <Button href='/'>{ lang.button }</Button>
      </div>
    </div>
  )
}
