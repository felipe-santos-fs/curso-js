function calcualdora (numero1, numero2, operador) {

    switch(operador) {
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 - numero2
        case '*':
            return numero1 * numero2
        case '/':
            return numero1 * numero2
        default:
            return 'Operações inválidas. Tente de outra forma!'
    }
}
console.log(calcualdora(8, 3, '+'))
console.log(calcualdora(8, 3, '-'))
console.log(calcualdora(8, 3, '*'))
console.log(calcualdora(8, 4, '/'))
console.log(calcualdora(8, 'a', '56'))
