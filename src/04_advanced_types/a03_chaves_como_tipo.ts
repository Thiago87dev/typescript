type Veiculo = {
  marca: string
  ano: string
}

interface Car {
  brand: Veiculo['marca']
  year: Veiculo['ano']
  name: string
}

const carro: Car = {
  brand: 'Ford',
  year: '2023',
  name: 'ka',
}

console.log(carro)
