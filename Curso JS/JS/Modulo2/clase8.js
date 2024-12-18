//Argumentos y Parámetros

function suma(a){  //Parámetros= referenciamos los valores dentro de las funciones
    return a+2;
}

let resultado = suma(5) //Argumentos: valores que les pasamos a las funciones cuando las llamamos
console.log(resultado)

//Ejemplo 2

function resta(a, b){ //Tengo dos parámetros
    return a-b //operación o código
}

let resultado2= resta(4,2) //Tengo dos argumentos
console.log(resultado2)

//Ejemplo 3
function operacionCombinada (a,b,c){
    return a+b-c
}

let resultadoCombinado= operacionCombinada(8,2,9)
console.log(resultadoCombinado) 