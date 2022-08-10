function adicionarPilha(vetorPilha, vetorAdiciona) {
    for(i in vetorAdiciona) {
        vetorPilha.push(vetorAdiciona[i])
    }

    return vetorPilha
}

const vetorPilha = [1, 2, 3, 4,5]
const vetorAdiciona = [6, 7, 8, 9, 10]

console.log(adicionarPilha(vetorPilha, vetorAdiciona))