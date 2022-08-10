function temFruta(fruta) {
    switch(fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return  'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 2 reais o quilo'
        default:
            return `Não vendemos ${fruta} aqui`
    }
}

console.log(temFruta('kiwi'))