function saqueDinheiro(valor) {
    let qntCem = 0
    let qntCinquenta = 0
    let qntDez = 0
    let qntCinco = 0
    let qntUm = 0
    
    while (valor > 0) {
        switch(valor) {
            case valor:
            case 100:
                valor -= 100
                qntCem++
                break
            case 50:
                valor -= 50
                qntCinquenta++
            case 10:
                valor -= 10
                qntDez++
                break
            case 5:
                valor -= 5
                qntCinco++
                break
            case 1:
                qntUm = Math.floor(valor / 1)
                valor -= Math.floor(valor / 1) * 1

            return `${qntCem} ${qntCinquenta} ${qntDez} ${qntCinco} ${qntUm}`
        }
    }   
}


console.log(saqueDinheiro(876))