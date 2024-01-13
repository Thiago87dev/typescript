// Com readonly não é possivel alterar adicionar ou excluir nada da tupla
const dadosCliente1: readonly [number, string] = [1, 'Thiago']
const dadosCliente2: [number, string, string] = [1, 'Thiago', 'Alves']
const dadosCliente3: [number, string, string?] = [1, 'Thiago']
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Thiago',
  'Gomes',
  'da',
  'Silva',
  'Alves',
]

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)
