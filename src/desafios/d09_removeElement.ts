function removeElement(nums: number[], val: number): number {
  nums = nums.filter((v) => v !== val)

  return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3))
