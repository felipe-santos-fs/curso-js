function calcularMulta(mes, valor) {
    if(mes > 0 && mes < 12) {
        const atraso = mes - 1
        for(let i = 0; i < atraso; i++) {
            valor *= 1.05
        }
        return console.log(valor.toFixed(2))
    } else {
        console.log('Mês inválido')
    }
}

calcularMulta('4', 100)