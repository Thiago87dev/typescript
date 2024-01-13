type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

function filtrados<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const letras = ['a', 'b', 'c', 'a', 'b', 'c']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mistos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c']

const numerosFiltrados = filtrados(numeros, (numero) => numero < 5) // usando minha função de filtro

const letrasFiltradas = filtrados(letras, (letra) => letra === 'a') // usando minha função de filtro

const numerosFiltradosOriginal = numeros.filter((numero) => numero < 5)

const mistosFiltradosOriginal = mistos.filter(
  (valor) => typeof valor === 'number' && valor < 5,
)

console.log(numerosFiltrados)
console.log(letrasFiltradas)
console.log(numerosFiltradosOriginal)
console.log(mistosFiltradosOriginal)
