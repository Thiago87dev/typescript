interface VotationOption {
  numberOfVotes: number
  option: string
}

export class Votation {
  private _votationOptions: VotationOption[] = []
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption)
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return
    this._votationOptions[votationIndex].numberOfVotes += 1
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions
  }
}

export class VotationApp {
  private votations: Votation[] = []

  addVotation(votation: Votation): void {
    this.votations.push(votation)
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details)
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes)
      }
      console.log('#####')
      console.log('')
    }
  }
}

const votacao1 = new Votation('Qual sua linguagem de programação favorita')
votacao1.addVotationOption({ option: 'Python', numberOfVotes: 0 })
votacao1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 })
votacao1.addVotationOption({ option: 'Tyoescript', numberOfVotes: 0 })
votacao1.vote(0)
votacao1.vote(1)
votacao1.vote(2)
votacao1.vote(2)

const votacao2 = new Votation('Qual sua cor favorita')
votacao2.addVotationOption({ option: 'Preto', numberOfVotes: 0 })
votacao2.addVotationOption({ option: 'Azul', numberOfVotes: 0 })
votacao2.addVotationOption({ option: 'Verde', numberOfVotes: 0 })
votacao2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 })
votacao2.addVotationOption({ option: 'Branco', numberOfVotes: 0 })
votacao2.vote(0)
votacao2.vote(1)
votacao2.vote(2)
votacao2.vote(1)
votacao2.vote(2)
votacao2.vote(4)
votacao2.vote(3)

const votationApp = new VotationApp()
votationApp.addVotation(votacao1)
votationApp.addVotation(votacao2)

votationApp.showVotation()
