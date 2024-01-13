//Array<T> ou t[]
export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor)
}

export function concatenaString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase())
}

const mult = multiplicaArgs(1, 2, 3)
console.log(mult)

const concat = concatenaString('a', 'b', 'c')
console.log(concat)

const upper = toUpperCase('a', 'b', 'c')
console.log(upper)
