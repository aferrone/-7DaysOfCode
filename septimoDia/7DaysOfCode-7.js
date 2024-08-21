alert("Bienvenido a la Calculadora!")


function suma () {
    let suma1 = parseFloat(prompt("Ingresa un numero: "))
    let suma2 = parseFloat(prompt("Ingresa otro numero: "))
    return alert(`El resultado de la suma es: ${suma1 + suma2} `);
}
function resta () {
    let resta1 = parseFloat(prompt("Ingresa un numero: "))
    let resta2 = parseFloat(prompt("Ingresa otro numero: "))
    return alert(`El resultado de la resta es: ${resta1 - resta2} `);
}

function division () {
    let division1 = parseFloat(prompt("Ingresa el numero a Dividir: "))
    let division2 = parseFloat(prompt("Ingresa el numero divisor: "))
    return alert(`El resultado de la division es: ${division1 / division2} `);
}
function multiplicacion () {
    let multiplicacion1 = parseFloat(prompt("Ingresa el numero base: "))
    let multiplicacion2 = parseFloat(prompt("Ingresa el numero multiplicador: "))
    return alert(`El resultado de la multiplicacion es: ${multiplicacion1 * multiplicacion2} `);
}

let inicio = parseInt(prompt(`Selecciona que operacion deseas hacer: 
    \n 1) Suma 
    \n 2) Resta 
    \n 3) Division 
    \n 4) Multiplicacion
    \n 5) Salir 
    \n Selecciona: `))



while(inicio !== 5){
    if (inicio === 1){
        suma()
    } else if (inicio === 2){
        resta()
    } else if(inicio === 3){
        division()
    }else if(inicio === 4) {
        multiplicacion()
    } else {
        alert("Opcion invelida, intente de nuevo")
    }

        inicio = parseInt(prompt(`Que operacion deseas realizar?: 
        \n 1) Suma 
        \n 2) Resta 
        \n 3) Division 
        \n 4) Multiplicacion
        \n 5) Salir 
        \n Selecciona: `));
    
}    

alert("Gracias por su visita, vuelva cuando guste!")
