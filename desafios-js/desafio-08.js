const stringPontuacoes = '45, 67, 24, 78, 32, 2, 36, 10, 8, 90'.split(', ')

function comparandoValores() {
    let numberPontouacoes = []
    let recorde = 0
    let contandoRecorde = 0
    let pontoPiorJogo = 0

    for(let i in stringPontuacoes) {
        numberPontouacoes.push(parseInt(stringPontuacoes[i]))
    }

    for(let i in numberPontouacoes) {
        if(pontoPiorJogo === 0) {
            pontoPiorJogo = numberPontouacoes[i]
        } else if(pontoPiorJogo > numberPontouacoes[i]) {
            pontoPiorJogo = numberPontouacoes[i]
        }

        if(recorde === 0) {
            recorde = numberPontouacoes[i]
        } else if(recorde < numberPontouacoes[i]) {
            recorde = numberPontouacoes[i]
            contandoRecorde++
        }
       
    }
    return [contandoRecorde, pontoPiorJogo]
}

console.log(comparandoValores())




/*for(let i in pontuacao) {
    if(pontosPiorJogo === 0) {
        pontosPiorJogo = pontuacao[i][pontuacao[i].length - 1]
    } else if(pontuacao[i][pontuacao[i].length - 1] < pontosPiorJogo) {
        pontosPiorJogo = pontuacao[i][pontuacao[i].length - 1]
    }

    if(recorde === 0) { recorde = pontuacao[i][pontuacao[i].length - 1] }
    
    if(pontuacao[i][pontuacao[i].length - 1] > recorde) {
        recorde = pontuacao[i][pontuacao[i].length - 1]
        contandoRecorde++
    }
}*/