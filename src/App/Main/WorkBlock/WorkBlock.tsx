import React from 'react'

import styles from './WorkBlock.module.sass'


const thread = require('src/common/images/index/workBlock/thread.png')
const man = require('src/common/images/index/workBlock/man.png')


export const WorkBlock: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        process
      </p>
      <div className={styles.content}>
        <div className={styles.rightBlock}>
          <h2 className={styles.mainTitle}>Как мы работаем</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                1. предложение
              </p>
              <p className={styles.itemText}>
                Обсуждаем детали проекта, пожелания по дизайну, стоимость работ, сроки
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                2. Договор
              </p>
              <p className={styles.itemText}>
                Если все устраивает, составляем договор, выделяем команду и проектного менеджера
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                3. Разработка
              </p>
              <p className={styles.itemText}>
                разрабатываем по agile-методологии, показываем результат по МЕРЕ разработки,
                принимаем правки &quot;на ходу&quot;
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                4. прием
              </p>
              <p className={styles.itemText}>
                По окончании работ, вы получаете качественный продукт, сделанный по всем стандартам
              </p>
            </div>
            <img
              src={thread}
              className={styles.thread}
            />
          </div>
        </div>
        <img
          src={man}
          className={styles.man}
        />
      </div>
    </div>
  )
}