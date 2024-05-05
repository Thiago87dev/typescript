// Os números dos bilhetes geralmente consistem em um número par de dígitos. Um número de bilhete é considerado da sorte se a soma da primeira metade dos dígitos for igual à soma da segunda metade.

// Minha solução
function solution(n: number): boolean {
  if (n.toString().length % 2 !== 0) return false
  const left = n
    .toString()
    .slice(0, n.toString().length / 2)
    .split('')
    .map((v) => Number(v))
    .reduce((acc, v) => acc + v)
  const right = n
    .toString()
    .slice(n.toString().length / 2)
    .split('')
    .map((v) => Number(v))
    .reduce((acc, v) => acc + v)

  return left === right
}

console.log(solution(123570))

//Melhor solução
function solution2(n: number): boolean {
  const nStr: string[] = String(n).split('')
  let sumF: number = 0
  let sumS: number = 0

  for (let i: number = 0; i < nStr.length / 2; i++) {
    sumF += parseInt(nStr[i])
    sumS += parseInt(nStr[nStr.length - i - 1])
  }

  return sumF === sumS
}

console.log(solution2(123570))
