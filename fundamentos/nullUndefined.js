let valor // Não inicializada

console.log(valor)

let valor2 = null // ausência de valor
console.log(valor2)
// console.log(valor2.toString()) // Erro!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Esse produto está sem preço
console.log(!!produto.preco)
console.log(produto)