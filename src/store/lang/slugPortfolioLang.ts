import { Dictionary } from './dictionary'


export type aboutBlockProps = {
  aboutTitle: string
  technologiesTitle: string
  prevButton: string
  nextButton: string
}

export const createSlugPortfolioProps = (dictionary: Dictionary) => {
  return {
    nav: [
      dictionary.services,
      dictionary.portfolio,
      dictionary.work,
      dictionary.technologies,
      dictionary.team,
      dictionary.contact,
    ],
    block1: { button: dictionary.viewSite },
    aboutBlock: {
      aboutTitle: dictionary.about,
      technologiesTitle: dictionary.technologies,
      prevButton: dictionary.previousProject,
      nextButton: dictionary.nextProject,
    },
    contactBlock: { title: dictionary.contactUs },
  }
}