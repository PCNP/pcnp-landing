import React, { useEffect } from 'react'


import styles from './MyForm.module.sass'


export const MyForm: React.FC = () => {
  useEffect(()=>{
    const scr = document.createElement('script')
    scr.type = 'text/javascript'
    scr.async = true
    scr.src = '//cdn.qform24.com/forms.js?v=' + Math.round(new Date().getTime() / 1000)
    document.head.appendChild(scr)

    return () => {
      document.head.removeChild(scr)
    }
  }, [])
  return (
    <div className={styles.formBlock}>
      <div
        id='Na5KzzRH'
        data-formid='4t1614961498NYT'
        className='_Forms_generate'
      />
    </div>
  )
}