function JurosCompostoSimples(capInical, taxaJuros, tempAplicacao) {
    const rendaSimples = capInical + (capInical * taxaJuros / 100 * tempAplicacao)


    jurosComprosto(tempAplicacao)
    function jurosComprosto(quantidadeDeDias){
        this.rendaComposta = capInical

        for(let i = 0; i < quantidadeDeDias; i++) {
            this.rendaComposta += (this.rendaComposta * taxaJuros / 100)
            
        }
        
    }

    return console.log(`Juros simples: R$ ${rendaSimples.toFixed(2).toString().replace('.', ',')} | Juros Composto: R$ ${
        this.rendaComposta.toFixed(2).toString().replace('.', ',')}`)
}
JurosCompostoSimples(100, 100, 6)

// 300 + 