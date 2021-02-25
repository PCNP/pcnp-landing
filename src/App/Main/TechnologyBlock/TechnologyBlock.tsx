import React from 'react'

import { commonBlockProps } from '../../../store/lang/indexlang'

import styles from './TechnologyBlock.module.sass'


const mongodb = require('src/common/images/index/technology/mongodb.svg')
const ts = require('src/common/images/index/technology/ts.svg')
const js = require('src/common/images/index/technology/js.svg')
const py = require('src/common/images/index/technology/py.svg')
const node = require('src/common/images/index/technology/node.svg')
const django = require('src/common/images/index/technology/django.svg')
const react = require('src/common/images/index/technology/react.svg')
const next = require('src/common/images/index/technology/next.svg')
const redux = require('src/common/images/index/technology/redux.svg')
const sql = require('src/common/images/index/technology/sql.svg')
const tarantool = require('src/common/images/index/technology/tarantool.svg')
const kuber = require('src/common/images/index/technology/kuber.svg')
const docker = require('src/common/images/index/technology/docker.svg')
const sass = require('src/common/images/index/technology/sass.svg')


type Item = {
  name: string
  img: any
}

type OwnProps = {
  lang: commonBlockProps
}

export const TechnologyBlock: React.FC<OwnProps> = ({ lang }) => {
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
      <h2 className={styles.mainTitle}>{ lang.title }</h2>
      <p className={styles.slogan}>{ lang.slogan }</p>
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