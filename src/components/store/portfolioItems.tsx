const mob = require('src/common/images/portfolioPage/items/item_1/mob.svg')
const desktop = require('src/common/images/portfolioPage/items/item_1/desktop.svg')


type item = {
  str?: string
  title: string
  description: string
  slug: string
  mobImg: any
  desktopImg: any
}

export const items: item[] = [
  {
    slug: '',
    title: 'Я юрист',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    str: 'site',
  },
  {
    slug: '',
    title: 'Я юрист',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    str: 'app',
  },
  {
    slug: '',
    title: 'Я юрист',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    str: 'site',
  },
  {
    slug: '',
    title: 'Я юрист',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    str: 'app',
  },
]