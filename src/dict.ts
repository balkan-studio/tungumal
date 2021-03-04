export type Dictionary =
  | 'Public transportation'
  | 'Opening hours'
  | 'Read more'
  | 'Open'
  | 'Exhibitions'
  | 'Group exhibition'
  | 'Events'
  | 'Upcoming exhibition'
  | 'News'

export type Language = 'en-us' | 'is'

const dictionary: {
  [d in Dictionary]: {
    [l in Language]: string
  }
} = {
  'Public transportation': {
    is: 'Almenningssamgöngur',
    'en-us': 'Public transportation',
  },
  'Opening hours': {
    is: 'Opnunartími',
    'en-us': 'Opening hours',
  },
  'Read more': {
    is: 'Lesa meira',
    'en-us': 'Read more',
  },
  Open: {
    is: 'Í gangi',
    'en-us': 'Open',
  },
  Exhibitions: {
    is: 'Sýningar',
    'en-us': 'Exhibitions',
  },
  'Group exhibition': {
    is: 'Samsýning',
    'en-us': 'Group exhibition',
  },
  Events: {
    is: 'Viðburðir',
    'en-us': 'Events',
  },
  'Upcoming exhibition': {
    is: 'Næsta sýning',
    'en-us': 'Upcoming exhibition',
  },
  News: {
    is: 'Fréttir',
    'en-us': 'News',
  },
}

export default dictionary
