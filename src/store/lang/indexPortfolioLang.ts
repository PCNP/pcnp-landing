import { Dictionary } from './dictionary'


export const createPortfolioIndexProps = (dictionary: Dictionary) => {
  return {
    nav: [
      dictionary.services,
      dictionary.portfolio,
      dictionary.work,
      dictionary.technologies,
      dictionary.team,
      dictionary.contact,
    ],
    portfolio: { title: dictionary.portfolio },
    itemBlock: { more: dictionary.more },
    contactBlock: { title: dictionary.contactUs },
  }
}