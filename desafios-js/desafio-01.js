//  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,
// subtração,
// multiplicação e divisão desses valores.


function calculando(numero1, numero2) {
    console.log(`Soma de ${numero1} + ${numero2} = ${numero1 + numero2}`)
    console.log(`Subtração de ${numero1} - ${numero2} = ${numero1 - numero2}`)
    console.log(`Mutiplicação de ${numero1} x ${numero2} = ${numero1 * numero2}`)
    console.log(`Divisão de ${numero1} / ${numero2} = ${numero1 / numero2}`)
}

calculando(8, 6)