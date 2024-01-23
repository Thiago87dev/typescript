interface Pessoa<T, U> {
  nome: T
  sobrenome: T
  idade: U
}

// Os generics em interface/types podem ter um valor padrao pré definidos
type Pessoa2<T = string, U = number> = {
  nome: T
  sobrenome: T
  idade: U
}

// Se não tiver valor padrão nos generics, eles devem ser especificados na sua utilização: <string, number>
const aluno: Pessoa<string, number> = {
  nome: 'Thiago',
  sobrenome: 'Alves',
  idade: 25,
}

const professor: Pessoa2 = {
  nome: 'João',
  sobrenome: 'Gomes',
  idade: 48,
}

console.log(aluno, professor)
