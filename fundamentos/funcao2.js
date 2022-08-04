// Amazenando uma função em uma varíavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazennando uma função arrow em uma varíavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno imlícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')