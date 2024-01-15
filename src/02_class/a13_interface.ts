interface TipoNome {
  nome: string
}

interface TipoSobrenome {
  sobrenome: string
}

interface TipoNomeCompleto {
  nomeCompleto(): string
}

type TipoPessoaType = TipoNome & TipoSobrenome & TipoNomeCompleto // juntando os tipos em 1 com type alias

const pessoaObjTypeAlias: TipoPessoaType = {
  nome: 'Olivia',
  sobrenome: 'Palito',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  },
}

console.log(pessoaObjTypeAlias.nomeCompleto())

interface TipoPessoaInterface // juntando os tipos em 1 com interfacce
  extends TipoNome,
    TipoSobrenome,
    TipoNomeCompleto {}

export class Pessoa implements TipoPessoaInterface {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoaObjInterface: TipoPessoaInterface = {
  nome: 'Thiago',
  sobrenome: 'alves',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  },
}

const pessoa = new Pessoa('Amanda', 'Ribeiro')
console.log(pessoa.nomeCompleto())
console.log(pessoaObjInterface.nomeCompleto())
