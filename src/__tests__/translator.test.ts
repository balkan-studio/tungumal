import { langSeek } from '../index'

test('Translate english', () => {
  expect(langSeek('Opening hours', 'is')).toBe('Opnunartímar')
})

test('Translate icelandic', () => {
  expect(langSeek('Read more', 'en')).toBe('Read more')
})
