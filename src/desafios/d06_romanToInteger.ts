// Dado um número romano, converta-o para um número inteiro

function romanToInt(s: string): number {
  let r = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      if (s[i + 1] === 'V') {
        i += 1
        r += 4
      } else if (s[i + 1] === 'X') {
        i += 1
        r += 9
      } else {
        r += 1
      }
    } else if (s[i] === 'V') {
      r += 5
    } else if (s[i] === 'X') {
      if (s[i + 1] === 'L') {
        i += 1
        r += 40
      } else if (s[i + 1] === 'C') {
        i += 1
        r += 90
      } else {
        r += 10
      }
    } else if (s[i] === 'L') {
      r += 50
    } else if (s[i] === 'C') {
      if (s[i + 1] === 'D') {
        i += 1
        r += 400
      } else if (s[i + 1] === 'M') {
        i += 1
        r += 900
      } else {
        r += 100
      }
    } else if (s[i] === 'D') {
      r += 500
    } else r += 1000
  }
  return r
}

console.log(romanToInt('LVIII'))
