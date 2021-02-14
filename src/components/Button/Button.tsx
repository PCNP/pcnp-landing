import React from 'react'
import styles from './Button.module.sass'
import Link from "next/link"
import {ButtonProps} from "../../types/types";



export const Button: React.FC<ButtonProps> = ({background = true,isOut = false, fontSize = '19px', width = '280px',
                                                         height = '60px', text, href}) => {
    return (
        <Link href={href} passHref={isOut}>
            <a className={`${styles.button} ${!background?styles.secondary:''}`} style={{
                width: `${width}`,
                fontSize: `${fontSize}`,
                height: `${height}`,
            }}>
                {text}
            </a>
        </Link>
    )
}