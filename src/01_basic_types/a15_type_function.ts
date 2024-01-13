// esse é o tipo função: uma função que recebe um item do tipo string e retorna string
type MapStringCallback = (item: string) => string

export function mapStrings(array: string[], callbackFn: MapStringCallback) {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callbackFn(item))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toLocaleUpperCase())
console.log(abc)
console.log(abcMapped)
