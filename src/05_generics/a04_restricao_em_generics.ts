type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal1 = {
  tipo: 'cão',
  cor: 'preto',
  vacinas: ['vacina1', 'vacina2'],
  idade: 12,
}

const tipoAnimal1 = obterChave(animal1, 'tipo')
const vacinas1 = obterChave(animal1, 'vacinas')

console.log(tipoAnimal1, vacinas1)
