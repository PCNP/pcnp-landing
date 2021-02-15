import React from 'react'
import styles from './PrimaryButton.module.sass'
import Link from "next/link"

type PrimaryButtonPropsType = {
    href?: string,
    click?: ()=>{},
    children: React.ReactNode,
}


export const PrimaryButton: React.FC<PrimaryButtonPropsType> = ({href, click, children}) => {
    if(!href){
        return React.createElement(
            `button`,
            {className: `${styles.button}`, onClick: click},
            `${children}`
        )
    }
    else {
        let str:string = href || ''
        return (
            React.createElement(
                (`${str[0]}`=='/')?'Link':'a',
                {className: `${styles.button}`, href: href},
                (`${str[0]}`=='/') ?
                    React.createElement(
                        `a`,
                        {},
                        `${children}`
                    ) : `${children}`
            )
        )
    }
}