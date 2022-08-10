const array1 = ['A', 'B', 'C', 'D']
const array2 = [1, 2, 3, 4]
const array3 = [0.1, 9.2, 0.5, 0.1]

function concactando(...args) {
    let resultado = []
    for(i in arguments) {
        resultado = resultado.concat(arguments[i])
    }
    return array1.concat(resultado)

}

console.log(concactando(array1, array3))
console.log(concactando(array1, array2))