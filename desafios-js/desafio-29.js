function contandoNumeros(vetor) {
    let entreDezEVinte = 0
    let foraDezEVinte = 0
    for(let i in vetor) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            entreDezEVinte++
        } else {
            foraDezEVinte++
        }
    }
    return console.log(`Entre 10, 20 tem ${entreDezEVinte} númeroe. E fora ${foraDezEVinte} números`)
}

vetorNumero = [2, 4, 78, 24, 20, 9, 65, 0, 12, 16]
contandoNumeros(vetorNumero)