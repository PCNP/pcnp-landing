import React from 'react'
import cn from 'classnames'

import { Button } from '../../../components/Button/Button'
import { item } from '../../../store/portfolioItems'
import { useCheckSupportWebp } from '../../../hooks/useCheckSupportWebp'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/project/block1.webp')
const bg = require('src/common/images/project/projectBg.png')


type OwnProps = {
  project: item
  button: string
  lang: 'ru' | 'en'
}

export const Block1: React.FC<OwnProps> = ({ project, button, lang }) => {
  const isSupport = useCheckSupportWebp()

  return (
    <div
      id='top'
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: isSupport !== null ? `url(${isSupport ? webpBg : bg})` : '' }
      }
    >
      <div className={styles.wrapperBlock}>
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>{ project && project.title[lang] }</h2>
          <p className={styles.description}>{ project && project.description[lang] }</p>
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
