type Documento = {
  titulo: string
  texto: string
  data?: Date
}

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'Texto',
  // data: new Date(),
}

const documento2: Documento = {
  titulo: 'Titulo',
  texto: 'Texto',
  data: new Date(),
}

console.log(documento.data?.toDateString() ?? 'Data não existe')
console.log(documento2.data?.toDateString() ?? 'Data não existe')
