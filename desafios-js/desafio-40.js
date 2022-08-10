const notas = [4, 5.9, 7.0, 8.9, 9.0, 3.1, 10]

function conceito(notas) {
    const conceito = []

    for(i in notas) {
        if(notas[i] >= 9 && notas[i] <= 10) {
            conceito.push('A')
        } else if(notas[i] >= 7 && notas[i] <= 8.9) {
            conceito.push('B')
        } else if (notas[i] >= 5 && notas[i] <= 6.9) {
            conceito.push('C')
        } else if(notas[i] >= 0 && notas[i] <= 4.9) {
            conceito.push('D')
        }
    }
    return conceito
}

console.log(conceito(notas))