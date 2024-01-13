//void é quando a função ou o metodo não retorna nada.

// Colocar o type void nesse caso não é obrigatorio
function noReturn(...args: string[]): void {
  console.log(args)

  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Thiago',
  Sobrenemo: 'Alves',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.Sobrenemo)
  },
}

noReturn('Thiago', 'Alves', 'Teste')
pessoa.exibirNome()

export { pessoa }
