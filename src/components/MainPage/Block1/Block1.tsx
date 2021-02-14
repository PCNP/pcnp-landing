import React from 'react'

import styles from './Block1.module.sass'
import {Button} from "../../Button/Button";

export const Block1: React.FC = () => {
  return (
      <div className={styles.main}>
          <div className={styles.content}>
              <h1>
                  СТУДИЯ РАЗРАБОТКИ САЙТОВ <br/>
                  И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
              </h1>
              <p>
                  Быстро, качественно, достойно!
              </p>
              <Button href={'/'} text={'Начать проект'} />
          </div>
      </div>
  )
}
