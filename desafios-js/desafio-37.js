function impares(inicio = 0, fim = 100) {
    let maiorNumero = 0

    if(fim < inicio) {
        maiorNumero = fim
        fim = inicio
        inicio = maiorNumero
    }

    for(i = inicio; i < fim; i++) {
        if(i % 2 > 0) {
            console.log(i)
        }
    }
}

impares(1, 30)