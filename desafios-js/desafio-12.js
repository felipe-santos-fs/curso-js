function fatorialDe(numero) {
    let fatorial = 1

    for(let i = numero; i > 0; i--) {
        fatorial *= i
    }

    return console.log(fatorial)
}

fatorialDe(18)