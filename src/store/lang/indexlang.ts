export type commonBlockProps = {
  title: string
  slogan?: string
  button?: string
}

export type blockWithItemsProps = {
  title: string
  items: {
    title: string
    text: string
  }[]
}

export type indexProps = {
  nav: string[]
  block1: commonBlockProps
  services: blockWithItemsProps
  whyWe: blockWithItemsProps
  portfolio: commonBlockProps
  workBlock: blockWithItemsProps
  techBlock: commonBlockProps
  contactBlock: commonBlockProps
}

export const ruIndex: indexProps = {
  nav: [
    'Услуги',
    'Портфолио',
    'Как мы работаем',
    'Технологии',
    'Команда',
    'Контакты',
  ],
  block1: {
    title: 'Студия разработки сайтов\n и мобильных приложений',
    slogan: 'Быстро, качественно, достойно!',
    button: 'Начать проект',
  },
  services: {
    title: 'Наши услуги',
    items: [
      {
        title: 'Веб-разработка',
        text: 'Разрабтываем веб-приложения любой сложности. От лендингов до ERP и CRM систем',
      },
      {
        title: 'Мобильная разработка',
        text: 'Разрабатываем приложения под iOS и Android системы',
      },
      {
        title: 'Дизайн',
        text: 'Создаем красивый и функциональный дизайн для web-сайтов и мобильных приложений',
      },
      {
        title: 'Чат-боты',
        text: 'Создаем чат-ботов для VK, WhatsApp, Telegram',
      },
    ],
  },
  whyWe: {
    title: 'Почему мы?',
    items: [
      {
        title: 'Высокая квалификация',
        text: 'Все наши работники обладают высокой квалификацией и большим набором скиллов',
      },
      {
        title: 'Соблюдение дедлайнов',
        text: 'Процесс работы строится на четкой организации и умелом распределении задач',
      },
      {
        title: 'Внимание к деталям',
        text: 'Мы учитываем все ваши пожелания и следим за качеством на всех уровнях',
      },
    ],
  },
  portfolio: {
    title: 'Портфолио',
    button: 'Все проекты',
  },
  workBlock: {
    title: 'Как мы работаем',
    items: [
      {
        title: '1. Предложение',
        text: 'Обсуждаем детали проекта, пожелания по дизайну, стоимость работ, сроки',
      },
      {
        title: '2. Договор',
        text: 'Если все устраивает, составляем договор, выделяем команду и проектного менеджера',
      },
      {
        title: '3. Разработка',
        text: 'разрабатываем по agile-методологии, показываем результат по МЕРЕ разработки, ' +
          'принимаем правки &quot;на ходу&quot;',
      },
      {
        title: '4. Прием',
        text: 'По окончании работ, вы получаете качественный продукт, сделанный по всем стандартам',
      },
    ],
  },
  techBlock: {
    title: 'Наши технологии',
    slogan: 'Применяем эффективные инструменты и лучшие практики отрасли',
  },
  contactBlock: { title: 'Свяжитесь с нами!' },
}

export const enIndex: indexProps = {
  nav: [
    'Services',
    'Cases',
    'Work Flow',
    'Technologies',
    'Team',
    'Contact',
  ],
  block1: {
    title: 'Software & App Development Agency',
    slogan: 'Fast. Professional. Unique.',
    button: 'Start Project',
  },
  services: {
    title: 'Our Services',
    items: [
      {
        title: 'Web Developement',
        text: 'We develop websites of any complexity. From landing pages to ERP and CRM systems',
      },
      {
        title: 'Mobile Developement',
        text: 'We develop mobile apps for iOS and Android systems',
      },
      {
        title: 'Digital Design',
        text: 'We create beautiful and functional design for websites and mobile apps',
      },
      {
        title: 'ChatBots',
        text: 'We create chatbots for VK, WhatsApp, Telegram',
      },
    ],
  },
  whyWe: {
    title: 'Choosing us',
    items: [
      {
        title: 'High qualification',
        text: 'All our employees are highly qualified and have a wide range of skills',
      },
      {
        title: 'Deadline management',
        text: 'The work flow is based on a clear organization and smart tasks distribution',
      },
      {
        title: 'Attention to details',
        text: 'We accept all your comments and track quality at all levels',
      },
    ],
  },
  portfolio: {
    title: 'Cases',
    button: 'All Projects',
  },
  workBlock: {
    title: 'Work Flow',
    items: [
      {
        title: '1. Offer',
        text: 'We discuss project details, design preferences, cost of work, terms',
      },
      {
        title: '2. Contract',
        text: 'If everything suits you, we draw up a contract, select a team and a project manager',
      },
      {
        title: '3. Development',
        text: 'We develop using agile methodology, show the result as as soon as it' +
          ' becomes available, accept edits &quot;on the fly&quot;',
      },
      {
        title: '4. Acceptance',
        text: 'Upon completion of the work, you receive a fine product made according to all standards',
      },
    ],
  },
  techBlock: {
    title: 'Our Technologies',
    slogan: 'We apply effective tools and industry best practices',
  },
  contactBlock: { title: 'Contact Us' },
}