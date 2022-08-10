function eBissexto(ano) {
    if((ano % 4 ) === 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

eBissexto(0)

function listaAnosBissexto(de, ate) {
    const anosBissexto = []

    while(de <= ate) {
        if(de % 4 === 0) {
            anosBissexto.push(de)
        }
        de++

    }
    return console.log(anosBissexto)
}

listaAnosBissexto(1800, 2000)