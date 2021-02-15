import React from 'react'
import styles from './SecondaryButton.module.sass'

type ButtonPropsType = {
    href?: string,
    children: any,
    click?: ()=>{}
}


export const SecondaryButton: React.FC<ButtonPropsType> = ({href, children, click}) => {
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