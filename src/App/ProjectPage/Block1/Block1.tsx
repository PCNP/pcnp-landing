import React from 'react'

import { Button } from '../../../components/Button/Button'
import { item } from '../../../store/portfolioItems'


import styles from './Block1.module.sass'


type OwnProps = {
  project: item
}

export const Block1: React.FC<OwnProps> = ({ project }) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperBlock}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ project && project.title }</h2>
          <p className={styles.description}>{ project && project.description }</p>
          <div className={styles.buttonBlock}>
            <Button
              href={project && project.href}
              btnType='outline'
            >
              На сайт
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}