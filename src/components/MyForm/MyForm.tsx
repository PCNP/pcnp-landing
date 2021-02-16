import React from 'react'

import { Button } from '../Button/Button'

import styles from './MyForm.module.sass'


const icon = require('src/common/images/icons/mail.png')


export const MyForm: React.FC = () => {
  const handlerButton = () => {

  }
  const handlerButton2 = () => {

  }
  return (
    <form className={styles.form}>
      <input
        type='text'
        className={styles.myInput}
        placeholder='ваше имя'
      />
      <input
        type='text'
        className={styles.myInput}
        placeholder='ваш телефон'
      />
      <input
        type='text'
        className={styles.myInput}
        placeholder='ваш e-mail'
      />
      <textarea
        placeholder='опишите ваш проект'
        className={styles.myTextArea}
      />
      <div className={styles.buttonsBlock}>
        <Button onClick={handlerButton}>Начать проект</Button>
        <Button
          onClick={handlerButton2}
          btnType='outline'
        >
          <img src={icon} />
        </Button>
      </div>
    </form>
  )
}