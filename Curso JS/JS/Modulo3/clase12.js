//Operadores Lógicos

//AND OR y NOT

let mayor= true
let menor= true
let promedio = false
console.log("operator and", mayor && menor) //mayor y menor son iguales? true
console.log("operator or", mayor || menor) // mayor o menor son iguales? true
console.log("operator not", !mayor) //mayor no es true= false

//ejemplo

let catalogoInfantil= true
let catalogoAdulto= true
let adulto= true
let niño= true

console.log ("Los adultos podrán comer el catalogo infantil? " , !adulto)
console.log ("Los adultos podrán comer el catalogo adulto? " , adulto)
console.log ("Los niños podrán comer el catalogo infantil? " , niño)
console.log ("Los niños podrán comer el catalogo de adulto? " , !niño)
console.log("Se realizo una excepción para la abuelita y su nieto, pueden comer lo que sea. ¿Podrán comer ambos menú? ", adulto && niño)
console.log("No alcanza para dos personas el menú infantil. ¿Alguno de los dos podrá comerlo? ", adulto||niño)
