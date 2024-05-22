// Escreva uma função que inverte caracteres entre parênteses (possivelmente aninhados) na string de entrada.
// Para "foo(bar)baz(blim)", a saída deve ser "foorabbazmilb"

// foo(bar(baz))blim
// "foobazrabblim" certo
// "foozabbarblim" errado

function solution(inputString: string): string {
  const stack: string[][] = [[]]

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      stack.push([])
    } else if (inputString[i] === ')') {
      const popLastInputFromStack = stack.pop()
      // console.log(popLastInputFromStack)

      const reversePoppedInputs = popLastInputFromStack!.reverse()
      // console.log(reversePoppedInputs)

      stack[stack.length - 1].push(...reversePoppedInputs)
    } else {
      stack[stack.length - 1].push(inputString[i])
      console.log(stack)
    }
  }
  return stack[0].join('')
}

console.log(solution('foo(bar(baz))blim'))

//[foo]
//[bar]
