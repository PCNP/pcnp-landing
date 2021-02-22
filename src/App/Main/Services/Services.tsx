import React from 'react'

import styles from './Services.module.sass'


const chrome = require('src/common/images/index/services/chrome.svg')
const apple = require('src/common/images/index/services/apple.svg')
const greenMan = require('src/common/images/index/services/greenMan.svg')
const colors = require('src/common/images/index/services/color-palette.svg')
const telegram = require('src/common/images/index/services/telegram.svg')
const whatsapp = require('src/common/images/index/services/whatsapp.svg')


export const Services: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        we offer
      </p>
      <h2 className={styles.servicesTitle}>Наши услуги</h2>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={chrome} />
          </div>
          <h3 className={styles.itemTitle}>Web-разработка</h3>
          <p className={styles.itemText}>
            Разрабтываем
            веб-приложения
            любой сложности.
            От лендингов до ERP
            и CRM систем
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={apple} />
            <img src={greenMan} />
          </div>
          <h3 className={styles.itemTitle}>Мобильная разработка</h3>
          <p className={styles.itemText}>
            Разрабтываем
            приложения под ios и
            android системы
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={colors} />
          </div>
          <h3 className={styles.itemTitle}>Дизайн</h3>
          <p className={styles.itemText}>
            Создаем красивый и
            функциональный
            дизайн для web-сайтов
            и мобильных
            приложений
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={telegram} />
            <img src={whatsapp} />
          </div>
          <h3 className={styles.itemTitle}>Чат-боты</h3>
          <p className={styles.itemText}>
            Создаем чат-ботов для
            VK, WhatsApp, Telegram
          </p>
        </div>
      </div>
    </div>
  )
}
