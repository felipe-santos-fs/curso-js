vetorNumerico = [2, 5, 64, 3, 2]

function funcao1(vetor, num) {
    const resultado = [] 

    for(let i in vetor) {
        resultado.push(vetor[i] * num)
    }
    return resultado
}

function funcao2(vetor, num) {
    const resultado = []

    if(num >= 5) {
        for(let i in vetor){
            resultado.push(vetor[i] * num)
        }
        
        return resultado
    } else {
        return 'Número inferior a 5'
    }
}

console.log(funcao1(vetorNumerico, 4))
console.log(funcao2(vetorNumerico, 6))