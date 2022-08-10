function numerosNegativos(vetor) {
    let contadorNegativos = 0
    
    for(let i in vetor) {
        if(vetor[i] < 0) {
            contadorNegativos++
        }
    }
    return `Existe ${contadorNegativos} nesse vetor`
}

vetorNumeros = [-1, 45, 145, -678, -2, 940, -10]
console.log(numerosNegativos(vetorNumeros))