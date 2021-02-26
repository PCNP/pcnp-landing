import React from 'react'


import { item } from '../../../store/portfolioItems'
import { Button } from '../../../components/Button/Button'

import styles from './InformationBlock.module.sass'


const ts = require('src/common/images/index/technology/ts.svg')


type OwnProps = {
  project: item
  projects: item[]
  length: number
}


export const InformationBlock: React.FC<OwnProps> = ({ project, projects, length }) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperBlock}>
        <div className={styles.about}>
          <h2 className={styles.mainTitle}>О проекте</h2>
          <p className={styles.description}>{ project && project.about }</p>
          <ul className={styles.modules}>
            Основные модули системы:
            {
              project && project.modules.map((el, i) => {
                return (
                  <li
                    className={styles.module}
                    key={i}
                  >
                    { `${i + 1}) ${ el }` }
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles.technologiesBlock}>
          <h2 className={styles.mainTitle}>Tехнологии</h2>
          <div className={styles.contentTechnologies}>
            <div className={styles.technologies}>
              {
                project && project.technologies.map((el, i) => {
                  return (
                    <div
                      className={styles.item}
                      key={i}
                    >
                      <img src={ts} />
                      <p>{ el.name }</p>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.buttonsBlock}>
              {
                project && (project.id - 1 >= 0) && (
                  <Button
                    btnType='outline'
                    href={`${projects[project.id - 1].slug}`}
                  >
                    Предыдущий проект
                  </Button>
                )
              }
              {
                project && (length > (project.id + 1)) && (
                  <Button
                    btnType='outline'
                    href={`${projects[project.id + 1].slug}`}
                  >
                    Следующий проект
                  </Button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}