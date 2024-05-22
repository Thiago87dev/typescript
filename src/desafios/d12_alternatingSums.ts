function solution(a: number[]): number[] {
  const res = []
  let a1 = 0
  let a2 = 0
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      a1 += a[i]
    } else {
      a2 += a[i]
    }
  }
  res.push(a1)
  res.push(a2)
  return res
}

console.log(solution([50, 60, 60, 45, 70]))
