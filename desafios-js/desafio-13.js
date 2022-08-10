function diaUtil(dia){
    switch(dia){
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia de semana')
            break
        case 1: case 7:
            console.log('Dia Fim De Semana')
            break
        default:
            console.log('Dia inválido')
            break

    }
}

diaUtil('A')