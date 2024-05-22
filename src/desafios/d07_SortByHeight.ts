// Algumas pessoas estão enfileiradas em um parque. Existem árvores entre eles que não podem ser movidas. Sua tarefa é reorganizar as pessoas de acordo com suas alturas em ordem crescente, sem mover as árvores.

// exwmplo
// array a = [-1, 150, 190, 170, -1, -1, 160, 180]
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a: number[]): number[] {
  const positions: number[] = []

  // Pegando as posições das 'arvores'
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) positions.push(i)
  }
  // Retirando as 'arvores' do array
  a = a.filter((v) => v !== -1)

  // Organizando o array em ordem crescente
  a.sort((a, b) => a - b)

  // Realocando as 'arvores' em suas determinadas posições
  for (let i = 0; i < positions.length; i++) {
    a.splice(positions[i], 0, -1)
  }

  return a
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
