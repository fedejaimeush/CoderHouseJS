'use strict'
// DECLARACIÓN DE FUNCIONES 

    //dar la bienvenida al sistema y pedir nombre del usuario
    function darBienvenida(){
        let nombreUsuario = prompt("Para iniciar el sistema de gestión académico ingresa tu nombre y apellido").toUpperCase();
        if (nombreUsuario != ''){
            alert(`Hola, ${nombreUsuario}. Ingresaste al sistema correctamente.`)
        }else{
            alert(`El dato ingresado no es correcto. Intentalo otra vez.`)
        }
    }



// función que carga el estudiante 
function pedirNombreEstudiante() {
    let nombreEstudiante = prompt("Ingresa el nombre del estudiante");
    console.log("Se ha ingresado el nombre correctamente");
    let apellidoEstudiante = prompt("Ingresar apellido del estudiante");
    console.log("Se ha ingresado el apellido correctamente");
    alert(`Se ha ingresado al estudiante ${nombreEstudiante} ${apellidoEstudiante} correctamente.`);
}

// función que ingresa las notas
function ingresarNota() {
    let nombreEvaluacion = prompt("Ingresa el tipo de evaluación que corresponda.").toUpperCase();
        let nota = prompt("Ingresa la nota de esta instancia de evaluación")
        if (nota < 6) {
            alert(`La nota de ${nombreEvaluacion} es ${nota} y está desaprobado.`)
        }else {
            alert(`La nota de ${nombreEvaluacion} es ${nota} y está aprobado.`)
        } 
}


// Programa
darBienvenida()
