import React from 'react'

import {Nav} from "../Nav/Nav";
import {Logo} from "../Logo/Logo";
import styles from './MainLayout.module.sass'

export const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <div className={styles.header}>
                <Logo/>
                <Nav/>
            </div>
            <>
                {children}
            </>
        </>
    )
}