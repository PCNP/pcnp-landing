import React from 'react'

import styles from './Block1.module.sass'


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

          </div>
      </div>
  )
}
