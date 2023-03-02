alert("Hola mundo");
const nombre = "Javier"
const direccion = "av siempre 123"
const pasatiempos = "Futbol, videojuegos, caminar"

console.log(nombre)
console.error(direccion)
console.warn(pasatiempos)

let curso = "Front-End developer"

console.log(curso)

const cursosDeProgramacion = ["js", "css", "html", "react"]

console.log(cursosDeProgramacion)
console.log("indice 0", cursosDeProgramacion[0])
console.log("indice 0", cursosDeProgramacion[1])
console.log("indice 0", cursosDeProgramacion[2])
console.log("indice 0", cursosDeProgramacion[3])



const datosVariados = ["mouse", true, 100, null, -10, "hola"];

/**
 * JS tiene funciones ya creadas para poder alterar los
 * valores de un arreglo
 */

// insertar un nuevo valor al final del array
datosVariados.push("otro dato");

console.log("------------");
console.log(datosVariados);

// eliminar el ultimo elemento de un array
datosVariados.pop();

datosVariados[1] = false;

// insetar un elemento en la primera posicion (0)
datosVariados.unshift("soy primero");

// eliminar un elemento en la primera posicon (0)
datosVariados.shift();

console.log("------------");
console.log(datosVariados);

console.log("------ AT ------");
console.log(datosVariados.at(4));