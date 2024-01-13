export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}
  get cpf(): string {
    console.log('GETTER CHAMADO')

    return this._cpf.replace(/\D/g, '')
  }
  set cpf(cpf: string) {
    console.log('SETTER CHAMADO')
    this._cpf = cpf
  }
}

const pessoa = new Pessoa('Thiago', 'Alves', 25, '123.456.789-00')
pessoa.cpf = '123.456.789-99'
console.log(pessoa.cpf)
