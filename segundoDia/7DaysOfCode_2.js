let nombre = prompt("Cual es tu nombre?: ");
let edad = prompt("Cual es tu edad?: ");
let lenguaje = prompt("Que lenguaje de programacion estas estudiando?: ");

console.log (`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}!`);

interaccion1 =parseInt(prompt(`Te gusta estudiar ${lenguaje}? Responde con el numero 1 para SI o 2 para NO: `))
console.log(interaccion1)
    if (interaccion1 == 1){
        alert("Muy Bien! Sigue estudiando y tendras mucho exito.")
        }    else if (interaccion1 == 2) {
            alert("Lástima, tal vez haya otro lenguaje que te interese...")
        }   else {
            alert("No entendi tu respuesta..")
        }


