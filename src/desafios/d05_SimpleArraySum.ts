// Dado um array de inteiros, encontre a soma de seus elementos.

function simpleArraySum(ar: number[]): number {
  return ar.reduce((acc, v) => acc + v)
}

console.log(simpleArraySum([1, 2, 3, 6, 3]))
