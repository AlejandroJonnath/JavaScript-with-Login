//Inicio de Objetos

//Son para referencias 
let nombre= "Goku"
let anime= "Dragon Ball"
let edad = "34"

//Creamos el objeto
//todo lo que está dentro de las llaves habrá datos
let personaje = {
    nombre: "Goku",
    anime: "Dragon Ball",
    edad: "34"
}
console.log(personaje) //Accede a todas las propiedades del objeto
console.log(personaje.nombre)//Accede a una propiedad específica del objeto
console.log(personaje["nombre"])// otra forma para hacerlo

//para modificar el objeto podríamos hacer
personaje.edad= 30;
personaje["edad"]= 31;s

//para eliminar una propiedad del objeto
delete personaje.anime
console.log(personaje)