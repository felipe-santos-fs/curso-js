// Par Nome/Valor
const saidacao = 'Opa' // contexto léxico 1

function exec() {
    const saidacao = 'Falaaa' // contexto léxico 2
    return saidacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal', 
        numero: 123
    }
}

console.log(saidacao)
console.log(exec())
console.log(cliente)