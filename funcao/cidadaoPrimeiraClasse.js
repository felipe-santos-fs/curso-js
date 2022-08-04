// Função em JS é First-Classe Objeto (Citizens)
// Higher-oder function

// Criar de forma literal
function fun1() {

}

// Armazenar em uma variável
const fun2 = function() {

}

// Armazennar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armaenar em um atributo de objeto
const obj = {}
obj.falar = function(fala) {return console.log(fala)}
obj.falar('Estou falando...')

// Passar uma função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Um função pode retornar/conter um função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
console.log()
cincoMais(4)