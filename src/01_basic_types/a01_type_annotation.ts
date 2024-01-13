/* eslint-disable */

// Tipos basicos (aqui ocorre inferencia de tipos)
let nome: string = 'Thiago' // qlq tipo de string: '' "" ``
let idade: number = 30 // 10, 10.57, -5.54, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbolo = Symbol('qlq-symbol') //symbol
// let big: bigint = 10n //bigint

// Array
let arrayNumbers: Array<number> = [1, 2, 3]
let arrayString: Array<string> = ['a', 'b', 'c']

let arrayNumbers2: number[] = [1, 2, 3]
let arrayString2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Thiago',
  idade: 25,
  adulto: true
}

// Funçôes
function soma(x:number, y:number): number { // nesse caso nao precisa tipar a função pois ja é inferido
  return x + y
}

const soma2: (x: number, y :number) => number = (x, y) => x + y // essa função é a mesma coisa da de cima

