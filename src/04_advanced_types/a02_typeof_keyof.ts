type CoresObj = typeof coresObj
type CoresChaves = keyof CoresObj

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

const traduzirCor = (cor: CoresChaves, cores: CoresObj) => {
  return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))
