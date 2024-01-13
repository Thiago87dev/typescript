// Modo mais complexo de criar uma classe
export class Empresa {
  public readonly nome: string // public não necessário
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  adicionaColaborador(Colaborador: Colaborador): void {
    this.colaboradores.push(Colaborador)
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador)
    }
  }
}

// Modo mais simples de criar uma classe
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/1000/11')
const colaborador1 = new Colaborador('Thiago', 'Alves')
const colaborador2 = new Colaborador('Maria', 'Julia')
const colaborador3 = new Colaborador('Ana', 'Luiza')

empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
empresa1.adicionaColaborador({ nome: 'Pereba', sobrenome: 'Doida' }) // isto não é necessariamente um colaborador

empresa1.mostrarColaborador()

console.log(empresa1.nome) // da pra acessar por ser public
