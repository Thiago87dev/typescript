export class CarrinhoDeCompra {
  private readonly produtos: Produto[] = []

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto)
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const p1 = new Produto('camiseta', 70)
const p2 = new Produto('calça', 90)
const p3 = new Produto('bota', 130)

const carrinhoDeCompra = new CarrinhoDeCompra()

carrinhoDeCompra.inserirProdutos(p1, p2, p3)

console.log(carrinhoDeCompra.quantidadeProduto())
console.log(carrinhoDeCompra.valorTotal())
