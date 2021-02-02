import React from 'react'

import styles from './HoverBlock.module.sass'


export const HoverBlock: React.FC = () => {
  return (
    <div className={styles.block}>
      Hover me!
    </div>
  )
}
