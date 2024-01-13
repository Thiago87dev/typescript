export class Empresa {
  readonly nome: string
  protected readonly colaboradores: Colaborador[] = []
  readonly cnpj: string

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy()
const colaborador1 = new Colaborador('Thiago', 'Alves')
const colaborador2 = new Colaborador('Maria', 'Julia')
const colaborador3 = new Colaborador('Ana', 'Luiza')

empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
empresa1.adicionaColaborador({ nome: 'Pereba', sobrenome: 'Doida' })

empresa1.mostrarColaborador()
const excluido1 = empresa1.popColaborador()

console.log(excluido1)
empresa1.mostrarColaborador()
