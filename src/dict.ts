export type Dictionary =
  | 'Public transportation'
  | 'Opening hours'
  | 'Read more'
  | 'Open'
  | 'Exhibitions'
  | 'Group exhibition'

export type Language = 'en' | 'is'

const dictionary: {
  [d in Dictionary]: {
    [l in Language]: string
  }
} = {
  'Public transportation': {
    is: 'Almenningssamgöngur',
    en: 'Public transportation',
  },
  'Opening hours': {
    is: 'Opnunartími',
    en: 'Opening hours',
  },
  'Read more': {
    is: 'Lesa meira',
    en: 'Read more',
  },
  Open: {
    is: 'Í gangi',
    en: 'Open',
  },
  Exhibitions: {
    is: 'Sýningar',
    en: 'Exhibitions',
  },
  'Group exhibition': {
    is: 'Hópsýning',
    en: 'Group exhibition',
  },
}

export default dictionary
