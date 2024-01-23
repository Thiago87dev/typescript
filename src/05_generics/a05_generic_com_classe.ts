export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

// const pessoa1 = new Pessoa('Thiago', 25)
// const pessoa2 = new Pessoa('Thiago', [25])
// const pessoa3 = new Pessoa({ nome: 'Thiago' }, [25])
// const pessoa4 = new Pessoa<string, number>('Thiago', 25)

// console.log(pessoa1, pessoa2, pessoa3, pessoa4)

export class Pilha<T> {
  private contador = 0
  private elementos: { [k: number]: T } = {}

  push(elemento: T): void {
    this.elementos[this.contador] = elemento
    this.contador++
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined
    this.contador--
    const elemento = this.elementos[this.contador]
    delete this.elementos[this.contador]
    return elemento
  }

  estaVazia(): boolean {
    return this.contador === 0
  }

  tamanho(): number {
    return this.contador
  }

  mostrarPilha(): void {
    for (const i in this.elementos) {
      console.log(this.elementos[i])
    }
  }
}

const pilha = new Pilha<number>()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.mostrarPilha()

while (!pilha.estaVazia()) {
  console.log(pilha.pop())
}

const pilha2 = new Pilha<number | string>()

pilha2.push('string 0')
pilha2.push('string 1')
pilha2.push(2)
pilha2.push('string 2')
pilha2.mostrarPilha()

while (!pilha2.estaVazia()) {
  console.log(pilha2.pop())
}
