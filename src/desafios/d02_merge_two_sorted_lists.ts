function mergeTwoLists(
  list1: number[] | null,
  list2: number[] | null,
): number[] | null {
  if (!list1 && !list2) return []
  if (!list1) return list2
  if (!list2) return list1

  const mergedList: number[] = []
  let i = 0
  let j = 0

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i])
      i++
    } else {
      mergedList.push(list2[j])
      j++
    }
  }

  while (i < list1.length) {
    mergedList.push(list1[i])
    i++
  }

  while (j < list2.length) {
    mergedList.push(list2[j])
    j++
  }

  return mergedList
}

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]
console.log(mergeTwoLists(list1, list2))
