import { Dictionary } from './dictionary'


export type CommonBlockProps = {
  title: string
  slogan?: string
  button?: string
}

export type BlockWithItemsProps = {
  title: string
  items: {
    title: string
    text: string
  }[]
}

export type IndexProps = {
  nav: string[]
  block1: CommonBlockProps
  services: BlockWithItemsProps
  whyWe: BlockWithItemsProps
  portfolio: CommonBlockProps
  workBlock: BlockWithItemsProps
  techBlock: CommonBlockProps
  contactBlock: CommonBlockProps
}

export const createIndexProps = (dictionary: Dictionary) => {
  return {
    nav: [
      dictionary.services,
      dictionary.portfolio,
      dictionary.work,
      dictionary.technologies,
      dictionary.team,
      dictionary.contact,
    ],
    block1: {
      title: dictionary.studio,
      slogan: dictionary.quicklyAndQuality,
      button: dictionary.start,
    },
    services: {
      title: dictionary.ourServices,
      items: [
        {
          title: dictionary.webDev,
          text: dictionary.developingApp,
        },
        {
          title: dictionary.mobDev,
          text: dictionary.developingMobileDev,
        },
        {
          title: dictionary.design,
          text: dictionary.createDesign,
        },
        {
          title: dictionary.chatBots,
          text: dictionary.createChatBots,
        },
      ],
    },
    whyWe: {
      title: dictionary.whyWe,
      items: [
        {
          title: dictionary.highQuality,
          text: dictionary.havingHighQuality,
        },
        {
          title: dictionary.deadlines,
          text: dictionary.processWork,
        },
        {
          title: dictionary.attention,
          text: dictionary.wish,
        },
      ],
    },
    portfolio: {
      title: dictionary.portfolio,
      button: dictionary.allProjects,
    },
    workBlock: {
      title: dictionary.work,
      items: [
        {
          title: dictionary.offer,
          text: dictionary.discussingDetails,
        },
        {
          title: dictionary.contract,
          text: dictionary.createContract,
        },
        {
          title: dictionary.development,
          text: dictionary.developingEgailMet,
        },
        {
          title: dictionary.acceptance,
          text: dictionary.getQualProduct,
        },
      ],
    },
    techBlock: {
      title: dictionary.technologies,
      slogan: dictionary.applyTools,
    },
    contactBlock: { title: dictionary.contactUs },
  }
}