const serHumano = {
  nome: 'Thiago' as const,
  sobrenome: 'Alves',
}

console.log(serHumano.nome)

function escolhaUmaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor
}

console.log(escolhaUmaCor('Azul'))

let teste: 'dentro' | 'fora'
teste = 'dentro'

console.log(teste)
