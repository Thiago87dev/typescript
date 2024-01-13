type Idade = number

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}

const gente: Pessoa = {
  nome: 'Thiago',
  idade: 25,
  salario: 200_000,
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

const genteComCor = setCorPreferida(gente, 'Amarelo')
console.log(genteComCor)
console.log(gente)
