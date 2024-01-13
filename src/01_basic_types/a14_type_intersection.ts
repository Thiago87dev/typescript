// & = And

type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade

export const pessoa: Pessoa = {
  nome: 'Thiago',
  sobrenome: 'Alves',
  idade: 25,
}

console.log(pessoa)
