// Geralmente se cria um objeto simples e o tipo é inferido pelo ts com isso não pode ser criado novas chaves
const objectA = {
  chaveA: 'valor A',
  chaveB: 'valor B',
}

// Caso queira incluir novas chaves, deve-se criar o objeto conforme abaixo
const objectB: {
  readonly chaveA: string
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objectB.chaveB = 'outro valor'
objectB.chaveC = 'opcional'
objectB.chaveT = 'Thiago'

console.log(objectA)
console.log(objectB)
