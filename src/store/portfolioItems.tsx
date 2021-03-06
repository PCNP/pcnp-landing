const mob = require('src/common/images/portfolioPage/items/item_1/mob.svg')
const desktop = require('src/common/images/portfolioPage/items/item_1/desktop.svg')
const slideImage = require('src/common/images/portfolioPage/items/item_1/slideImage.svg')


export type item = {
  str?: string
  id: number
  title: string
  description: string
  slug: string
  mobImg: any
  desktopImg: any
  href: string
  modules: string[]
  about: string
  technologies: number[]
  slideImages: any[]
}

export const items: item[] = [
  {
    id: 0,
    slug: 'jurist-project',
    title: 'Я юрист',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: [
      'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
      'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
      'Модуль стоимости. Информационный модуль с тарифами',
      'Модуль проверки контрагента',
      'Модуль о нас. Предосталяет основную информацию о компании.',
    ],
    about: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
    technologies: [1, 2, 7],
  },
  {
    id: 1,
    slug: 'mobile-app-project',
    title: 'Я юрист_2',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'app',
    href: '',
    modules: [
      'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
      'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
      'Модуль стоимости. Информационный модуль с тарифами',
      'Модуль проверки контрагента',
      'Модуль о нас. Предосталяет основную информацию о компании.',
    ],
    about: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
    technologies: [1, 2, 7],
  },
  {
    id: 2,
    slug: 'app-project',
    title: 'Я юрист_3',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: [
      'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
      'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
      'Модуль стоимости. Информационный модуль с тарифами',
      'Модуль проверки контрагента',
      'Модуль о нас. Предосталяет основную информацию о компании.',
    ],
    about: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
    technologies: [1, 2, 7],
  },
  {
    id: 3,
    slug: 'development-app',
    title: 'Я юрист_4',
    description: 'Разработка мобильного приложения',
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'app',
    href: '',
    modules: [
      'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
      'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
      'Модуль стоимости. Информационный модуль с тарифами',
      'Модуль проверки контрагента',
      'Модуль о нас. Предосталяет основную информацию о компании.',
    ],
    about: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
    technologies: [1, 2, 7],
  },
]