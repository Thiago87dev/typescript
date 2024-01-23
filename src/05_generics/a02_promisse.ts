type MeuTipo = number

async function promisseAsync() {
  return 1
}

function minhaPromisse(): Promise<MeuTipo | string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promisseAsync().then((resultado) => console.log(resultado + 1))
minhaPromisse().then((resultado) => {
  if (typeof resultado === 'number') console.log(resultado + 1)
})
