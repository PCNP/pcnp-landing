import React from 'react'
import Link from 'next/link'

import styles from './Logo.module.sass'


export const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <p className={styles.blurLogo}>PCNP</p>
        PCNP
      </a>
    </Link>
  )
}
