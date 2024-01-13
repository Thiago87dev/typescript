export abstract class Personagem {
  protected abstract emoji: string

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} vai atacar ${personagem.nome}`)

    this.bordao()
    personagem.perderVida(this.ataque)
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`)
  }

  abstract bordao(): void
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'

  bordao(): void {
    console.log('\u{1f9DD}' + ' Guerreiraaaaa Atacandoooooooo')
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}'

  bordao(): void {
    console.log('\u{1f9DF}' + ' Monstroooooo Atacandoooooooo')
  }
}

const guerreira = new Guerreira('Maria', 100, 1000)
const monstro = new Monstro('Bredd', 85, 1000)

guerreira.atacar(monstro)
monstro.atacar(guerreira)
