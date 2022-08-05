let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

 comparaComThis = comparaComThis.bind(obj)

 let comparaComThisArrou = (param) => console.log(this === param)
 comparaComThisArrou(global)
 comparaComThisArrou(module.exports)
 
 comparaComThisArrou = comparaComThis.bind(obj)
 comparaComThis(obj)
 comparaComThisArrou(module.exports)