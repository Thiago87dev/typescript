// logica não finalizada

export class Carro {
  private readonly motor = new Motor()

  ligar() {
    this.motor.ligar()
  }

  acelerar() {
    this.motor.acelerar()
  }

  parar() {
    this.motor.parar()
  }

  desligar() {
    this.motor.desligar()
  }
}

export class Motor {
  private parado = true
  private ligado = false
  private acelerando = false

  ligar() {
    if (this.ligado) {
      console.log('carro ja esta ligado')
      return
    }
    this.ligado = true
    console.log('carro ligando')
  }

  acelerar() {
    if (!this.ligado) {
      console.log('não da pra acelerar... carro desligado')
      return
    }
    if (this.acelerando) {
      console.log('pegando mais velocidade')
      return
    }
    console.log('carro acelerando')
    this.acelerando = true
  }

  parar() {
    console.log('carro parado')
  }

  desligar() {
    console.log('carro desligado')
  }
}

const carro = new Carro()

carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
