export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const objNome = { nome: 'Thiago' }
const objIdade = { idade: 25 }
const uniao = unirObjetos(objNome, objIdade)

console.log(uniao)
