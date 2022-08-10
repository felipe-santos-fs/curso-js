function ParOuImpar(numeros = []) {
    let contagemPares = 0
    let contagemImpares = 0

    for(let i in numeros) {
        if(numeros[i] % 2 == 0) {
            contagemPares++
        } else {
            contagemImpares++
        }
    }
    return console.log(`Números PARES são ${contagemPares}. Números IMPARES ${contagemImpares}`)
}

ParOuImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])