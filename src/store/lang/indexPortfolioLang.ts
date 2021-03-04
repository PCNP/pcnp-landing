import { Dictionary } from './dictionary'


export const createPortfolioIndexProps = (dictionary: Dictionary) => {
  return {
    buttonText: dictionary.start,
    nav: [
      dictionary.services,
      dictionary.portfolio,
      dictionary.work,
      dictionary.technologies,
      dictionary.contact,
    ],
    portfolio: { title: dictionary.portfolio },
    itemBlock: { more: dictionary.more },
    contactBlock: { title: dictionary.contactUs },
  }
}