import React from 'react'

import { blockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './WorkBlock.module.sass'


const thread = require('src/common/images/index/workBlock/thread.svg')
const man = require('src/common/images/index/workBlock/man.svg')


type OwnProps = {
  lang: blockWithItemsProps
}


export const WorkBlock: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        process
      </p>
      <div className={styles.content}>
        <div className={styles.rightBlock}>
          <h2 className={styles.mainTitle}>{ lang.title }</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                { lang.items[0].title }
              </p>
              <p className={styles.itemText}>
                { lang.items[0].text }
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                { lang.items[1].title }
              </p>
              <p className={styles.itemText}>
                { lang.items[1].text }
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                { lang.items[2].title }
              </p>
              <p className={styles.itemText}>
                { lang.items[2].text }
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>
                4
                { lang.items[3].title }
              </p>
              <p className={styles.itemText}>
                { lang.items[3].text }
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