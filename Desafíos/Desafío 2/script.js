function hacerPedido(){
    let nombreCliente = prompt("Ingresa tu nombre");
    let numeroMesa = Number(prompt("Ingresa el número de mesa"));
    let comboSeleccion = Number(prompt("¿Qué combo querés llevar? Ingresá el número del combo"));
    let comboCantidad = Number(prompt("Ingresa la cantidad del combo que querés"));
    let gastoCubiertos = 200.00 * comboCantidad;
    let precioC1 = 9.15;
    let precioC2 = 11.50;
    let precioC3 = 14.45;
    let precioC4 = 14.50;
    let precioC5 = 19.50;

    alert("Hola, " + nombreCliente + " a continuación encontrarás el resumen de tu pedido.");
    
    if (comboSeleccion == 1) {
        alert("Pediste el combo número " + comboSeleccion + " que vale $" + precioC1 + ". La cantidad pedida es " + comboCantidad + ". El total a pagar, que incluye $200 del costo de cubiertos por persona es de $" + Math.round(precioC1 * comboCantidad + gastoCubiertos))
    } else if (comboSeleccion == 2) {
        alert("Pediste el combo número " + comboSeleccion + " que vale $" + precioC2 + ". La cantidad pedida es " + comboCantidad + ". El total a pagar, que incluye $200 del costo de cubiertos por persona es de $" + Math.round(precioC2 * comboCantidad + gastoCubiertos))
    } else if (comboSeleccion == 3) {
        alert("Pediste el combo número " + comboSeleccion + " que vale $" + precioC3 + ". La cantidad pedida es " + comboCantidad + ". El total a pagar, que incluye $200 del costo de cubiertos por persona es de $" + Math.round(precioC3 * comboCantidad + gastoCubiertos))
    } else if (comboSeleccion == 4) {
        alert("Pediste el combo número " + comboSeleccion + " que vale $" + precioC4 + ". La cantidad pedida es " + comboCantidad + ". El total a pagar, que incluye $200 del costo de cubiertos por persona es de $" + Math.round(precioC4 * comboCantidad + gastoCubiertos))
    } else if (comboSeleccion == 5) {
        alert("Pediste el combo número " + comboSeleccion + " que vale $" + precioC5 + ". La cantidad pedida es " + comboCantidad + ". El total a pagar, que incluye $200 del costo de cubiertos por persona es de $" + Math.round(precioC5 * comboCantidad + gastoCubiertos))
    } else {
        alert("El número del combo es incorrecto.")
    }


    alert(nombreCliente + " Te llevaremos tu pedido a la mesa número " + numeroMesa);
}

