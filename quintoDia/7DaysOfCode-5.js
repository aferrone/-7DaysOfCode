alert("Bienvenido al sistema de pedidos Online de Supermercados el Chispirito")
let inicio = prompt("Por favor, indiquenos su nombre: ")
alert(`Te damos la bienvenida ${inicio}`)

let frutas = [];
let verduras = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let almacen = [];
let = listaDeCompras = "Frutas, Lacteos, Dulces, Congelados, Verduras, Almacen";
alert("Te entregamos un carrito de compras, ya puedes comenzar a llenarlo")
let sistema = prompt("Deseas agregar un alimento a la lista? Responda si o no: ")
while (sistema === "si") {
    let producto = prompt("Que alimento deseas agregar?: ")
    let categoria = prompt(`Selecciona en que categoria guardaras este articulo ${listaDeCompras}`)
    if (categoria === "frutas") {
        frutas.push(producto);
    }
    else if (categoria === "lacteos") {
        lacteos.push(producto)
    }
    else if (categoria === "congelados") {
        congelados.push(producto)
    }
    else if (categoria === "dulces") {
        dulces.push(producto)
    }
    else if (categoria === "almacen") {
        almacen.push(producto)
    }
    else if (categoria === "verduras") {
        verduras.push(producto)
    }
    else {
        alert("Error en la seleccion de categoria, seleccione una valida")
    }
    sistema = prompt("Deseas agregar otro alimento a la lista? Responda si o no: ")
}

alert(`Genial ${inicio}, esta es tu lista de compras: \nFrutas: ${frutas} \nDulces: ${dulces} \n Lacteos: ${lacteos} \nCongelados: ${congelados} \nAlmacen: ${almacen} \nVerduras: ${verduras}`)

alert(`Cliente ${inicio}, indiquenos los siguientes datos para la entrega.`)
let datos1 = prompt("Direccion: ")
let datos2 = prompt("Hora de Entrega: ")
let datos3 = prompt("Nombre de la persona que lo va a recibir: ")
let datos4 = prompt("Metodo de pago: ");
let datos = [`Direccion: ${datos1}\nHora de Entrega: ${datos2}\nQuien lo recibe: ${datos3}\nMetodo de pago: ${datos4}`];
alert(datos)
alert("Muchas gracias por ser nuestro cliente, que disfrute de su pedido")