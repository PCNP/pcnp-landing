import React from 'react'

import styles from './Services.module.sass'

import chrome from './../../../common/images/index/services/chrome.png'
import apple from './../../../common/images/index/services/apple.png'
import greenMan from './../../../common/images/index/services/greenMan.png'
import colors from './../../../common/images/index/services/color-palette.png'
import telegram from './../../../common/images/index/services/telegram.png'
import whatsapp from './../../../common/images/index/services/whatsapp.png'


export const Services: React.FC = () => {
    return (
        <div className={styles.main}>
            <p className={styles.backgroundText}>
                we offer
            </p>
            <h2>НАШИ УСЛУГИ</h2>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div>
                        <img src={chrome}/>
                    </div>
                    <h3>Web-разработка</h3>
                    <p>
                        Разрабтываем<br/>
                        веб-приложения<br/>
                        любой сложности.<br/>
                        От лендингов до ERP<br/>
                        и CRM систем
                    </p>
                </div>
                <div className={styles.item}>
                    <div>
                        <img src={apple}/>
                        <img src={greenMan}/>
                    </div>
                    <h3>Мобильная разработка</h3>
                    <p>
                        Разрабтываем<br/>
                        приложения под ios и<br/>
                        android системы
                    </p>
                </div>
                <div className={styles.item}>
                    <div>
                        <img src={colors}/>
                    </div>
                    <h3>Дизайн</h3>
                    <p>
                        Создаем красивый и<br/>
                        функциональный<br/>
                        дизайн для web-сайтов<br/>
                        и мобильных<br/>
                        приложений
                    </p>
                </div>
                <div className={styles.item}>
                    <div>
                        <img src={telegram}/>
                        <img src={whatsapp}/>
                    </div>
                    <h3>Чат-боты</h3>
                    <p>
                        Создаем чат-ботов для<br/>
                        VK, WhatsApp, Telegram
                    </p>
                </div>
            </div>
        </div>
    )
}
