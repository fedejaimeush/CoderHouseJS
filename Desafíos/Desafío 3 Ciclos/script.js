function hacerPedido(){
    
    var precioC1 = 9.15;
    var precioC2 = 11.50;
    var precioC3 = 14.45;
    var precioC4 = 14.50;
    var precioC5 = 19.50;

    var nombreCliente = prompt("Ingresa tu nombre");
    var numeroMesa = Number(prompt("Ingresa el número de mesa"));

    do{
        var gastoCubiertos = 200 * comboCantidad;
        var comboSeleccion = Number(prompt("¿Qué combo querés llevar? Ingresá el número del combo"));
        var comboCantidad = Number(prompt("Ingresa la cantidad del combo que querés"));
               
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

        var continuarPedido = prompt("¿Deseas agregar otro pedido? SI o NO").toUpperCase();

    }while(continuarPedido != "NO");
    
    
    alert(nombreCliente + " Te llevaremos tu pedido a la mesa número " + numeroMesa);
}

