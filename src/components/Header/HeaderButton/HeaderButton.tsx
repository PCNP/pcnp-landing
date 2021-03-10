import cn from 'classnames'
import React from 'react'
import { scroller } from 'react-scroll/modules'

import styles from './HeaderButton.module.sass'


type OwnProps = {
  href?: string
}


export const Button: React.FC<OwnProps> = ({ children }) => {
  return (
    <a
      className={
        cn(
          styles.button,
        )
      }
      onClick={
        ()=>{
          scroller.scrollTo('contacts', {
            duration: 600,
            delay: 0,
            smooth: 'easeInOutQuint',
          })
        }
      }
    >
      { children }
    </a>
  )
}