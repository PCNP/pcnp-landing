import React from 'react'


import styles from './WhyWe.module.sass'


const diplom = require('src/common/images/index/whyWe/diplom.png')
const date = require('src/common/images/index/whyWe/date.png')
const apple2 = require('src/common/images/index/whyWe/apple2.png')
const computer = require('src/common/images/index/whyWe/computer.png')


export const WhyWe: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        choosing us
      </p>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>ПОЧЕМУ МЫ?</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={diplom} />
              </div>
              <h3 className={styles.itemTitle}>
                Высокая
                <br />
                квалификация
              </h3>
              <p className={styles.itemText}>
                все наши работники
                обладают высокой
                квалификацией и большим
                набором скиллов
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={date} />
              </div>
              <h3 className={styles.itemTitle}>
                Cоблюдение
                <br />
                дедлайнов
              </h3>
              <p className={styles.itemText}>
                процесс работы
                строится на четкой
                организации и умелом
                распределении задач
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.imageBlock}>
                <img src={apple2} />
              </div>
              <h3 className={styles.itemTitle}>
                Внимание к
                <br />
                деталям
              </h3>
              <p className={styles.itemText}>
                мы учитываем все
                ваши пожелания и
                следим за качеством
                на всех уровнях
              </p>
            </div>
          </div>
        </div>
        <div className={styles.computerBlock}>
          <img src={computer} />
        </div>
      </div>
    </div>
  )
}
