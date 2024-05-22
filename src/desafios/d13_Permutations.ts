function permute(nums: number[]): number[][] {
  const results: number[][] = []

  function backtrack(start: number, end: number) {
    if (start === end) {
      results.push([...nums])
      return
    }

    for (let i = start; i < end; i++) {
      ;[nums[start], nums[i]] = [nums[i], nums[start]] // Swap
      backtrack(start + 1, end)
      ;[nums[start], nums[i]] = [nums[i], nums[start]] // Undo swap
    }
  }

  backtrack(0, nums.length)
  return results
}

console.log(permute([1, 2, 3]))
