import React from 'react'

import styles from './Nav.module.sass'

import Link from "next/link"

export const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/'><a>Услуги</a></Link>
            <Link href='/'><a>Портфолио</a></Link>
            <Link href='/'><a>Как мы работаем</a></Link>
            <Link href='/'><a>Технологии</a></Link>
            <Link href='/'><a>Команда</a></Link>
            <Link href='/'><a>Контакты</a></Link>
        </nav>
    )
}