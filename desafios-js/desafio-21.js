function planoPorIdade(idade) {
    let valorAPagar = 100
    if(idade < 10) {
        valorAPagar += 80
    } else if(idade => 10 && idade < 30) {
         valorAPagar += 50
    } else if(idade => 30 && idade < 60) {
        valorAPagar += 95
    } else if(idade > 60) {
        valorAPagar += 130
    }
    return valorAPagar
}

console.log(planoPorIdade(19))