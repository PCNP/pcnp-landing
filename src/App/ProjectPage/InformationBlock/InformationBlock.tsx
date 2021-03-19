import React from 'react'


import { item } from '../../../store/portfolioItems'
import { Button } from '../../../components/Button/Button'
import { aboutBlockProps } from '../../../store/lang/slugPortfolioLang'
import { technologies } from '../../../store/technologies'

import styles from './InformationBlock.module.sass'


type OwnProps = {
  project: item
  projects: item[]
  length: number
  lang: 'ru' | 'en'
}


export const InformationBlock: React.FC<OwnProps & aboutBlockProps> =
  ({ lang, project, projects, length, aboutTitle, technologiesTitle, nextButton, prevButton }) => {
    return (
      <div className={styles.main}>
        <div className={styles.wrapperBlock}>
          <div className={styles.about}>
            <h2 className={styles.mainTitle}>{ aboutTitle }</h2>
            <p className={styles.description}>{ project && project.about[lang] }</p>
            <ul className={styles.modules}>
              Основные модули системы:
              {
                project && project.modules[lang].map((el, i) => {
                  return (
                    <li
                      className={styles.module}
                      key={i}
                    >
                      <span>
                        { `${i + 1}) ` }
                      </span>
                      { el }
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.technologiesBlock}>
            <h2 className={styles.mainTitle}>{ technologiesTitle }</h2>
            <div className={styles.contentTechnologies}>
              <div className={styles.technologies}>
                {
                  project && project.technologies.map((el, i) => {
                    return (
                      <div
                        className={styles.item}
                        key={i}
                      >
                        <img
                          src={technologies[el].img}
                          alt={technologies[el].name}
                          width={70}
                          height={70}
                        />
                        <p>{ technologies[el].name }</p>
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
                      href={`/portfolio/${projects[project.id - 1].slug}`}
                    >
                      { prevButton }
                    </Button>
                  )
                }
                {
                  project && (length > (project.id + 1)) && (
                    <Button
                      btnType='outline'
                      href={`/portfolio/${projects[project.id + 1].slug}`}
                    >
                      { nextButton }
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