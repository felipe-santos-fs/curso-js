function comparandoKids(altura1, taxa1, altura2, taxa2) {
    let anosParaUtra = 0
    if(taxa1 === taxa2) {
        return 'Eles vão crescer igualemnte.'
    } else {
        if(altura1 < altura2) {
            while(altura1 < altura2) {
                altura1 += taxa1
                anosParaUtra++
            }
            return `Criança 2 levará ${anosParaUtra} anos para utrapassar crinaça 1`

        } else if (altura2 < altura1) {
            while(altura2 < altura1) {
                altura2 += taxa2
                anosParaUtra++
            }
            
            return `Criança 1 levará ${anosParaUtra} anos para utrapassar crinaça 2`
        }
    }
}


console.log(comparandoKids(130, 5, 132, 4))