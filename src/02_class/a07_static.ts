export class Pessoa {
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('oi')
  }

  metodoNormal() {
    console.log(Pessoa.cpfPadrao) // para acessar atributos estaticos em um metodo dentro da classe nao pode usar this
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, this.idadePadrao, Pessoa.cpfPadrao) // pode usar this ou a propria classe
  }
}

const pessoa = new Pessoa('Thiago', 'Alves', 25, '350.441.738-27')
const pessoa2 = Pessoa.criaPessoa('Aline', 'Silva')
pessoa.cpf = '123.456.789-99'
console.log(pessoa)
console.log(pessoa2)
