//Record
const objeto1: Record<string, string | number> = {
  nome: 'Thiago',
  sobrenome: 'Alves',
  idade: 25,
}
console.log(objeto1)

type PessoaProtocol = {
  nome?: string
  sobrenome?: string
  idade?: number
}

// required -> transforme tudo em obrigatorio
type PessoaRequired = Required<PessoaProtocol>

const pessoaRequired: PessoaRequired = {
  nome: 'Thiago',
  sobrenome: 'Alves',
  idade: 25,
}
console.log(pessoaRequired)

//Partial -> transforma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>

const pessoaPartial: PessoaPartial = {
  nome: 'Thiago',
  sobrenome: 'Alves',
}
console.log(pessoaPartial)

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

const pessoaPick: PessoaPick = {
  nome: 'Thiago',
  sobrenome: 'Alves',
}
console.log(pessoaPick)

//module mode
export default 1
