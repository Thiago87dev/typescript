type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

export function meuFiltro<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i])
    }
  }
  return novoArray
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayFiltrado = meuFiltro(array, (n) => n < 5)

console.log(arrayFiltrado)
