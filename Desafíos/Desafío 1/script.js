function hacerPedido(){
    let nombreCliente = prompt("Ingresa tu nombre");
    let numeroMesa = parseInt(prompt("Ingresa el número de mesa"));
    let comboSeleccion = prompt("¿Qué combo querés llevar?");
    let comboPrecio = parseFloat(prompt("Ingresa el precio del combo"));
    let comboCantidad = parseInt(prompt("Ingresa la cantidad del combo"));
    let gastoCubiertos = 200 * comboCantidad;
    let gastoSinAgregados = comboCantidad * comboPrecio;
    let gastosConAgregados = gastoSinAgregados + gastoCubiertos;

    alert("Hola, " + nombreCliente + " a continuación encontrarás el resumen de tu pedido.");
    alert("Pediste " + comboCantidad + " " + comboSeleccion + " . El precio de cada combo es " + comboPrecio + " .");
    alert("El total a pagar por tus combos es: " + gastoSinAgregados + " . A esto debes sumarle $200 por el uso de cubiertos de cada combo. El gasto total a pagar es " + gastosConAgregados);
    alert("Te llevaremos tu pedido a la mesa número " + numeroMesa);
}

