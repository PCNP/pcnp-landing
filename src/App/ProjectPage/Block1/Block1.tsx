import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { Button } from '../../../components/Button/Button'
import { item } from '../../../store/portfolioItems'


import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/project/block1.webp')
const bg = require('src/common/images/project/projectBg.png')


type OwnProps = {
  project: item
  button: string
}

export const Block1: React.FC<OwnProps> = ({ project, button }) => {
  const supportsWebP = useWebPSupportCheck()

  const [isLoad, setIsLoad] = useState(false)

  const handlerLoad = () => {
    setIsLoad(true)
  }

  useEffect(()=>{
    window.addEventListener('load', handlerLoad)
    return () => {
      window.removeEventListener('load', handlerLoad)
    }
  },[])
  return (
    <div
      id='top'
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: isLoad ? `url(${supportsWebP ? webpBg : bg})` : '' }
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
