//generics

const last = <T>(arr: T[]): T => arr[arr.length - 1]

export const numeros = [1, 2, 3, 4, 5]

console.log(last(numeros))
