const vetorA = ['a', 'b', 'c', 'd', 'e']
const vetorB = ['f', 'g', 'h', 'i', 'j']

function mudandoVetor(vetorA, vetorB) {
    if(vetorA.length === vetorB.length) {
        for(i in vetorA) {
            vetorA.push(vetorB[0])
            vetorB.push(vetorA[0])
            vetorA.shift()
            vetorB.shift()
        }
    } else {
        return 'Votores diferentes.'
    }
    return `A: ${vetorA} | B: ${vetorB}`
}

console.log(mudandoVetor(vetorA, vetorB))