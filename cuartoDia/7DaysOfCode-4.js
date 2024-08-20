let numeroSecreto = Math.floor(Math.random()* 11)
let intentos = 3;

for (let i = 0; i < intentos; i++) {
    let adivinanza = parseInt(prompt("Adivina el numero secreto entre el 0 y el 10: "));

    if (adivinanza === numeroSecreto) {
        alert("Adivinaste le numero secreto!!")
        break;
    } else{
        if (i < intentos -1){
            alert("Numero incorrecto, intentalo de nuevo.")
        } else {
            alert(`Lo siento, no acertste. El numero era ${numeroSecreto}`);
        }
    }
}