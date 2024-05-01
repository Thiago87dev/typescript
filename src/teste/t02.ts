export interface User {
  nome: string
  idade: number
}

const nomeMaiuscula = (user: User) => {
  return user.nome.toUpperCase()
}

const pessoa1: User = {
  nome: 'Thiago',
  idade: 25,
}

console.log(nomeMaiuscula(pessoa1))
