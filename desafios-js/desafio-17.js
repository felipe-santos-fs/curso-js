function calcularNovoSalario (salario, plano) {
    switch (plano) {
        case 'A':
            return salario += ((salario * 10) / 100)
        case 'B':  
            return salario += salario * 0.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano inválido.'
    }

}

console.log(calcularNovoSalario(1366, 'A'))
console.log(calcularNovoSalario(1366, 'B'))
console.log(calcularNovoSalario(1366, 'C'))
console.log(calcularNovoSalario(1366, 'g'))

