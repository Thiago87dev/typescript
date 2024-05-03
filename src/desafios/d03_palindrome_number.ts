function isPalindrome(x: number): boolean {
  const y = String(x).split('').reverse().join('')
  if (Number(y) === x) return true
  return false
}

console.log(isPalindrome(121))
