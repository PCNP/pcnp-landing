import React from 'react'

import { BlockWithItemsProps } from '../../../store/lang/indexlang'

import styles from './WorkBlock.module.sass'


const thread = require('src/common/images/index/workBlock/thread.svg')
const man = require('src/common/images/index/workBlock/man.svg')


type OwnProps = {
  lang: BlockWithItemsProps
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
            {
              lang.items.map((el, i)=> {
                return (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p className={styles.itemTitle}>
                      { el.title }
                    </p>
                    <p className={styles.itemText}>
                      { el.text }
                    </p>
                  </div>
                )
              })
            }
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