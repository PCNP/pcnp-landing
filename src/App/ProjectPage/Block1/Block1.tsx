import React from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { Button } from '../../../components/Button/Button'
import { item } from '../../../store/portfolioItems'


import styles from './Block1.module.sass'


type OwnProps = {
  project: item
  button: string
}

export const Block1: React.FC<OwnProps> = ({ project, button }) => {
  const supportsWebP = useWebPSupportCheck()
  return (
    <div
      className={
        cn(
          styles.main,
          supportsWebP ? styles.webpBg : styles.bg
        )
      }
    >
      <div className={styles.wrapperBlock}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ project && project.title }</h2>
          <p className={styles.description}>{ project && project.description }</p>
          <div className={styles.buttonBlock}>
            <Button
              href={project && project.href}
              btnType='outline'
            >
              { button }
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
