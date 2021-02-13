import { langSeek } from '../index'

test('Translate english', () => {
  expect(langSeek('Opening hours', 'is')).toBe('Opnunartími')
})

test('Translate icelandic', () => {
  expect(langSeek('Read more', 'en-us')).toBe('Read more')
})
