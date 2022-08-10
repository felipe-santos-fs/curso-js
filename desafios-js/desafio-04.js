function dividindo(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor)
    const restoDivisao = dividendo % divisor
    
    console.log(`Resultado: ${resultado} Resto: ${restoDivisao}`)
}

dividindo(7, 4)