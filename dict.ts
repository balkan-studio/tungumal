import { Dictionary, Language } from './types'

const dictionary: {
  [key in Dictionary]: {
    [key in Language]: string
  }
} = {
  'Public transportation': {
    is: 'Almenningssamgöngur',
    en: 'Public transportation',
  },
  'Opening hours': {
    is: 'Opnunartímar',
    en: 'Opening hours',
  },
  'Read more': {
    is: 'Lesa meira',
    en: 'Read more',
  },
}

export default dictionary
