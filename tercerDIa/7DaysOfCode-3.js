let nombre = prompt("Indicame tu nombre: ");
let area1 = "Front-end";
let area2 = "Back-end";

console.log(nombre);
alert(`Hola ${nombre}`);

let desicion = parseInt(prompt(`Elige una rama de la programacion : 1) ${area1}, 2) ${area2}?. Elige con numeros: `));

if (desicion === 1) {
    let vue = "Vue";
    let react = "React"
    let lenguajeFrontEnd = parseInt(prompt(`Que lenguaje eliges?, 1) ${vue} o 2) ${react}?:  `))
    if (lenguajeFrontEnd === 1){
        alert("Elegiste Vue, Excelente eleccion para un  desarrollo agil");
    } else if (lenguajeFrontEnd === 2){
        alert("Elegiste React, excelente herramienta para interfaces dinamicas");
    } else {
        alert("Opcion no valida.");
    }

    let especializacion = parseInt(prompt(`Te gustaria seguir especializandote en Front-End(1) o convertirte en Fullstack(2)? Elige con numeros: `));
    if (especializacion === 1) {
        alert("Continua profundizando tus conocimientos en Front-End");
    } else if ( especializacion === 2) {
        alert("Genial, entonces tomas tu camino en Fullstack!! ")
    } else {
        alert("Opcion no valida")
    }

}   else if (desicion === 2) {
    let c = "#C";
    let java = "Java";
    let lenguajeBackEnd = parseInt(prompt(`Que lenguaje eliges?, 1) ${c} o 2) ${java}?:  `))
    if (lenguajeBackEnd === 1){
        alert("Elegiste #C, perfecto para aplicaciones robustas y de alto rendimiento");
    } else if (lenguajeBackEnd === 2) {
        alert("Elegiste Java, Una excelente eleccion para aplicaciones escalables!");
    } else {
        alert("Opcion no valida")
    }
    let especializacion = parseInt(prompt(`Te gustaria seguir especializandote en Front-End(1) o convertirte en Fullstack(2)? Elige con numeros: `)); 
    if (especializacion === 1) {
        alert("Continua profundizando tus conocimientos en Front-End");
    } else if (especializacion === 2) {
        alert("Genail, entonces tomas tu camino en Fullstack!! ");
    } else {
        alert("Opcion no valida")
    }

} else {
    alert("Error en el sistema")
}

let continuar = "";
let fin = "x";
let tecnologiaElegidas = [];

while (fin != continuar) {
    let nuevaTeconologia = parseInt(prompt("Que otra tecnologia te gustaria aprender?: 1)JavaScript, 2)Phyton, 3)React, 4)Todas!"));
    if (nuevaTeconologia === 1) {
        alert("genial que quieras aprender Java Script")
        
    }
    if (nuevaTeconologia === 2) {
        alert("Un lenguaje  muy interesante y facil de usar!")
        
    }
    if (nuevaTeconologia === 3){
        alert("excelente herramienta para interfaces dinamicas")
        
    }
    if (nuevaTeconologia === 4){
        alert("Entonces tenemos un largo camino que recorrer! Me entusiasma! Que tengas exito en tu carrera!")
        break;
    }

    continuar = prompt("Quieres aprender otra tecnologia? ´ok´ para continuar o ´x´ para salir: ")
    if (continuar === fin){
        alert(`Gracias por participar en el cuestionario, que tenga exito en tu carrera!`)
        break;
    
    } else if(continuar === "ok"){
        console.log(nuevaTeconologia)
    } else {
        alert("error en el sistema")
    }
}

