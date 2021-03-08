import React from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { CommonBlockProps } from '../../../store/lang/indexlang'
import { MyForm } from '../../../components/MyForm/MyForm'

import styles from './ContactBlock.module.sass'


const webpBg = require('src/common/images/webp/index/contactsBlock.webp')
const bg = require('src/common/images/index/contactsBg.png')


export const ContactBlock: React.FC<CommonBlockProps> = (props) => {
  const supportsWebP = useWebPSupportCheck()
  return (
    <div
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: `url(${supportsWebP ? webpBg : bg})` }
      }
      id='contacts'
    >
      <p className={styles.backgroundText}>
        contact us
      </p>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>{ props && props.title }</h2>
        <MyForm />
      </div>
    </div>
  )
}