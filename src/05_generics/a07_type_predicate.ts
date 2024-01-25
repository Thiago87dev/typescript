export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function soma<T>(...args: T[]): number {
  const resultado = args.reduce((acc, v) => {
    if (isNumber(acc) && isNumber(v)) {
      return acc + v
    }
    return acc
  }, 0)
  return resultado
}

console.log(soma(1, 2, 3))
console.log(soma('a', 'b', 'c'))
