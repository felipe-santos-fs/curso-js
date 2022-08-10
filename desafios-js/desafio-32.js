function calculandoNotas(notas) {
    let somaNotas = 0

    for(i in notas) {
        somaNotas += notas[i]    
    }
    return (somaNotas / notas.length).toFixed(1)
}

const vetorNotas = [2, 5, 7, 4, 8, 9]
console.log(calculandoNotas(vetorNotas))