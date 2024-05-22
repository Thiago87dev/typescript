// Comparando a puntuação entre dois arrays

function compareTriplets(a: number[], b: number[]): number[] {
  let al = 0
  let bo = 0
  const r = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      al += 1
    } else if (a[i] < b[i]) {
      bo += 1
    }
  }
  r.push(al)
  r.push(bo)

  return r
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
