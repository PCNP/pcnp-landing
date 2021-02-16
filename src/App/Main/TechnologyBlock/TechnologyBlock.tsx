import React from 'react'

import styles from './TechnologyBlock.module.sass'


const ts = require('src/common/images/index/technology/ts.png')
const js = require('src/common/images/index/technology/js.png')
const py = require('src/common/images/index/technology/py.png')
const node = require('src/common/images/index/technology/node.png')
const django = require('src/common/images/index/technology/django.png')
const react = require('src/common/images/index/technology/react.png')
const next = require('src/common/images/index/technology/next.png')
const redux = require('src/common/images/index/technology/redux.png')
const sql = require('src/common/images/index/technology/sql.png')
const mongodb = require('src/common/images/index/technology/mongodb.png')
const tarantool = require('src/common/images/index/technology/tarantool.png')
const kuber = require('src/common/images/index/technology/kuber.png')
const docker = require('src/common/images/index/technology/docker.png')
const sass = require('src/common/images/index/technology/sass.png')


type Item = {
  name: string
  img: any
}

export const TechnologyBlock: React.FC = () => {
  const techonologies: Item[] = [
    {
      name: 'typescript', img: ts,
    },
    {
      name: 'javascript', img: js,
    },
    {
      name: 'python', img: py,
    },
    {
      name: 'node.js', img: node,
    },
    {
      name: 'django', img: django,
    },
    {
      name: 'rect.js/ react native', img: react,
    },
    {
      name: 'next.js', img: next,
    },
    {
      name: 'redux', img: redux,
    },
    {
      name: 'mongodb', img: mongodb,
    },
    {
      name: 'postgresql', img: sql,
    },
    {
      name: 'tarantool', img: tarantool,
    },
    {
      name: 'kubernetes', img: kuber,
    },
    {
      name: 'docker', img: docker,
    },
    {
      name: 'sass', img: sass,
    },
  ]
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        technology
      </p>
      <h2 className={styles.mainTitle}>НАШИ ТЕХНОЛОГИИ</h2>
      <p className={styles.slogan}>Применяем эффективные инструменты и лучшие практики отрасли</p>
      <div className={styles.content}>
        {
          techonologies.map( (el, i) => {
            return (
              <div
                className={styles.item}
                key={i}
              >
                <img
                  src={el.img}
                  className={styles.itemImage}
                />
                <p className={styles.itemName}>{ el.name }</p>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}