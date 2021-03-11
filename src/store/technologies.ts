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


type Technology = {
  name: string
  img: any
}

type Tecgnologies = {
  [id: number]: Technology
}


export const technologies: Tecgnologies = {
  1: {
    name: 'typescript',
    img: ts,
  },
  2: {
    name: 'javascript',
    img: js,
  },
  9: {
    name: 'mongodb',
    img: mongodb,
  },
  8: {
    name: 'redux',
    img: redux,
  },
  3: {
    name: 'python',
    img: py,
  },
  4: {
    name: 'node.js',
    img: node,
  },
  5: {
    name: 'django',
    img: django,
  },
  6: {
    name: 'react / react native',
    img: react,
  },
  10: {
    name: 'postgresql',
    img: sql,
  },
  11: {
    name: 'tarantool',
    img: tarantool,
  },
  12: {
    name: 'kubernetes',
    img: kuber,
  },
  13: {
    name: 'docker',
    img: docker,
  },
  14: {
    name: 'sass',
    img: sass,
  },
  7: {
    name: 'next.js',
    img: next,
  },
}