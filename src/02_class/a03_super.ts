export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

// Usando o super para criar mais um atributo no aluno e para modifcar o metodo getNomeCompleto
export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf)
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes')

    return super.getNomeCompleto()
  }
}
export class Professor extends Pessoa {
  getNomeCompleto(): string {
    const result = super.getNomeCompleto()
    return 'Fazendo algo antes ' + result
  }
}

const pessoa = new Pessoa('Thiago', 'Alves', 25, '350.441.738-27')
const aluno = new Aluno('Ana', 'Julia', 25, '350.441.738-27', '1º ano B')
const professor = new Professor('Amanda', 'Ribeiro', 25, '350.441.738-27')

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(professor.getNomeCompleto())
