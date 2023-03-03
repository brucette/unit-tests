export const hashtags = (text) => {
  return text.split(' ').filter(item => item.startsWith('#'))
}