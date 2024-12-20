//Short Circuit

//Verificar que values ejecutan false


//Falsy: 

//Boleean false
//0
//""
//null
//undefined
//NaN

let nombre= "";
let username= nombre || "Anónimo"
console.log(username)//Saldrá anónimo porque "" sin nada es un false 

let nombreReal= "Pollito"
let usernameReal= nombreReal || "Anónimo"
console.log(usernameReal)

//Ahora vamos con el AND (&&)
function fn1(){
    console.log("Soy función 1")
    return false;
}

function fn2(){
    console.log("Soy función 2")
    return true
}

let variableFuncion= fn1() && fn2();