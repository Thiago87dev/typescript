function aVeryBigSum(ar: number[]): number {
  let r = 0
  for (let i = 0; i < ar.length; i++) {
    r += ar[i]
  }
  return r
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
)
