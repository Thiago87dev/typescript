function reversePrefix(word: string, ch: string): string {
  let index = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i + 1
      break
    }
  }
  const primeiraParte = word.slice(0, index)
  const invertida = primeiraParte.split('').reverse().join('')
  const segundaParte = word.slice(index)

  return invertida + segundaParte
}

console.log(reversePrefix('palavra', 's'))
