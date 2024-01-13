//Non-null assertion (!)
const body3 = document.querySelector('body')!
body3.style.background = 'green'

//Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement
body2.style.background = 'blue'

//Condicional
const body1 = document.querySelector('body')
if (body1) body1.style.backgroundColor = 'red'

//HTMLElement
const input = document.querySelector('input') as HTMLInputElement
input.value = 'qlq coisa'
input.focus()
