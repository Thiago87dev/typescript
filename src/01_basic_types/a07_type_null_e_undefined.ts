// undefined

let x
if (typeof x === 'undefined') x = 20
console.log(x * 2)

export function createPerson(
  // abertura da função
  firstName: string,
  lastName?: string,
): {
  // Type annotation
  firstName: string
  lastName?: string
} {
  // Corpo da função
  return {
    firstName,
    lastName,
  }
}

const pessoa1 = createPerson('Thiago')

console.log(pessoa1.lastName)

// null

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x
  return null
}

const squareOfTwo = squareOf(2)

if (squareOfTwo === null) {
  console.log('conta invalida')
} else {
  console.log(squareOfTwo * 20)
}
