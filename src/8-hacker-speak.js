export const hackerSpeak = (words) => {
  const as = /[aA]/ig;
  const es = /[eE]/ig;
  const is = /[iI]/ig;
  const os = /[oO]/ig;
  const ss = /[sS]/ig;

  const replaceables = [
    {letter: as, number: 4}, 
    {letter: es, number: 3}, 
    {letter: is, number: 1}, 
    {letter: os, number: 0}, 
    {letter: ss, number: 5}
  ]

  let hackered = words;

  for (const item of replaceables) {
    hackered = hackered.replaceAll(item.letter, item.number)
  }

  return hackered
}