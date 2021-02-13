import dictionary, { Dictionary, Language } from './dict'

export const langSeek = (key: Dictionary, lang: Language) => {
  if (dictionary[key]) {
    const obj = dictionary[key]
    if (obj[lang]) {
      return obj[lang]
    }
  } else return key
}
