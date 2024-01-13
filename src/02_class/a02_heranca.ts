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

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Nome completo de aluno: ' + this.nome + ' ' + this.sobrenome
  }
}
export class Professor extends Pessoa {
  getNomeCompleto(): string {
    return 'Nome completo do professor: ' + this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Thiago', 'Alves', 25, '350.441.738-27')
const aluno = new Aluno('Ana', 'Paula', 25, '350.441.738-27')
const professor = new Professor('Amanda', 'Ribeiro', 25, '350.441.738-27')

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(professor.getNomeCompleto())
