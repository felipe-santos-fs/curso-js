function verificandoCaractere(string1, string2) {
    let maiorString = 0
    let menorString = 0
    let contandoIguais = 0

    if(string1 > string2) {
        maiorString = string1.toLowerCase()
        menorString = string2.toLowerCase()
    } else {
        maiorString = string2.toLowerCase()
        menorString = string1.toLowerCase()
    }

    for(let i in maiorString) {
        for(let i2 in menorString) {
            if(maiorString[i] == menorString[i2]) {
                contandoIguais++
            }
        }   
    }

    if(contandoIguais === menorString.length) {
        return true
    } else {
        return false
    }
}

console.log(verificandoCaractere('abcaAZdf', 'abzd'))