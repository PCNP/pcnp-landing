const mob = require('src/common/images/portfolioPage/items/item_1/mob.svg')
const desktop = require('src/common/images/portfolioPage/items/item_1/desktop.svg')
const slideImage = require('src/common/images/portfolioPage/items/item_1/slideImage.svg')


type RuEng = {
  ru: string
  en: string
}

export type item = {
  str?: string
  id: number
  title: RuEng
  description: RuEng
  slug: string
  mobImg: any
  desktopImg: any
  href: string
  modules: {
    ru: string[]
    en: string[]
  }
  about: RuEng
  technologies: number[]
  slideImages: any[]
}

export const items: item[] = [
  {
    id: 0,
    slug: 'jurist-project',
    title: {
      ru: 'Я юрист',
      en: 'I\'m a lawyer',
    },
    description: {
      ru: 'Разработка мобильного приложения',
      en: 'Mobile App Development',
    },
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: {
      ru: [
        'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
        'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
        'Модуль стоимости. Информационный модуль с тарифами',
        'Модуль проверки контрагента',
        'Модуль о нас. Предосталяет основную информацию о компании.',
      ],
      en: [
        'LLC module-allows you to collect documents automatically for interaction with LLC',
        'IP module - allows you to collect documents automatically for interaction with the IP',
        'The cost module. Information module with tariffs',
        'Counterparty verification module',
        'The module is about us. Provides basic information about the company.',
      ],
    },
    about: {
      ru: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
      en: 'This system helps to simplify the process of processing documents for LLC and sole proprietor.',
    },
    technologies: [1, 2, 7],
  },
  {
    id: 1,
    slug: 'mobile-app-project',
    title: {
      ru: 'Я юрист',
      en: 'I\'m a lawyer',
    },
    description: {
      ru: 'Разработка мобильного приложения',
      en: 'Mobile App Development',
    },
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: {
      ru: [
        'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
        'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
        'Модуль стоимости. Информационный модуль с тарифами',
        'Модуль проверки контрагента',
        'Модуль о нас. Предосталяет основную информацию о компании.',
      ],
      en: [
        'LLC module-allows you to collect documents automatically for interaction with LLC',
        'IP module - allows you to collect documents automatically for interaction with the IP',
        'The cost module. Information module with tariffs',
        'Counterparty verification module',
        'The module is about us. Provides basic information about the company.',
      ],
    },
    about: {
      ru: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
      en: 'This system helps to simplify the process of processing documents for LLC and sole proprietor.',
    },
    technologies: [1, 2, 7],
  },
  {
    id: 2,
    slug: 'app-project',
    title: {
      ru: 'Я юрист',
      en: 'I\'m a lawyer',
    },
    description: {
      ru: 'Разработка мобильного приложения',
      en: 'Mobile App Development',
    },
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: {
      ru: [
        'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
        'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
        'Модуль стоимости. Информационный модуль с тарифами',
        'Модуль проверки контрагента',
        'Модуль о нас. Предосталяет основную информацию о компании.',
      ],
      en: [
        'LLC module-allows you to collect documents automatically for interaction with LLC',
        'IP module - allows you to collect documents automatically for interaction with the IP',
        'The cost module. Information module with tariffs',
        'Counterparty verification module',
        'The module is about us. Provides basic information about the company.',
      ],
    },
    about: {
      ru: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
      en: 'This system helps to simplify the process of processing documents for LLC and sole proprietor.',
    },
    technologies: [1, 2, 7],
  },
  {
    id: 3,
    slug: 'development-app',
    title: {
      ru: 'Я юрист',
      en: 'I\'m a lawyer',
    },
    description: {
      ru: 'Разработка мобильного приложения',
      en: 'Mobile App Development',
    },
    mobImg: mob,
    desktopImg: desktop,
    slideImages: [slideImage, slideImage, slideImage],
    str: 'site',
    href: '',
    modules: {
      ru: [
        'Модуль ООО - позволяет собрать документы в автоматическом режими для взаимодействия с ООО',
        'Модуль ИП - позволяет собрать документы в автоматическом режими для взаимодействия с ИП',
        'Модуль стоимости. Информационный модуль с тарифами',
        'Модуль проверки контрагента',
        'Модуль о нас. Предосталяет основную информацию о компании.',
      ],
      en: [
        'LLC module-allows you to collect documents automatically for interaction with LLC',
        'IP module - allows you to collect documents automatically for interaction with the IP',
        'The cost module. Information module with tariffs',
        'Counterparty verification module',
        'The module is about us. Provides basic information about the company.',
      ],
    },
    about: {
      ru: 'Данная система помогает упростить процессы оформления документов для ООО и ИП.',
      en: 'This system helps to simplify the process of processing documents for LLC and sole proprietor.',
    },
    technologies: [1, 2, 7],
  },
]