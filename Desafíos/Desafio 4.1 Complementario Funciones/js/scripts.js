// OBJETIVO DEL PROGRAMA PRINCIPAL
    //INGRESAR NOTA DE TP O EXAMEN
    //PONDERAR NOTA: SI ES TP tiene valor del 60% - si es EXAMEN el valor es del 40%
    //MOSTRAR NOTA PONDERADA
alert("Ud. está ingresando al sistema de carga y cálculo de notas");
let nombreProfesor = prompt("Ingrese su nombre");
let nombreMateria = prompt("Ingrese el nombre la materia a su cargo");
let ponderaTP = 0.6;
let ponderaEX= 0.4;
alert("Bienvenida/o " + nombreProfesor + " , profesor/a de " + nombreMateria);
calcularNotas();


// DEFINICIÓN DE FUNCIONES
        function calcularNotas() {
                let tipoEvaluacion = prompt("Ingrese el tipo de evaluación - valores admitidos: TP o EX")
                let notaEvaluacion = parseInt(prompt("Ingrese la nota - valores admitidos: 1 al 10"))
                if (tipoEvaluacion != "" && notaEvaluacion != "") {
                    if (tipoEvaluacion === "TP") {
                        alert("La nota es " + notaEvaluacion + " y su ponderacion es " + ponderarTP(notaEvaluacion, ponderaTP)) ;
                    } else if (tipoEvaluacion === "EX") {   
                        alert("La nota es " + notaEvaluacion + " y su ponderacion es " + ponderarEX(notaEvaluacion, ponderaTP)) ;
                    }else {
                        alert("No se han ingresado datos válidos")
                    }
                }else {
                    calcularNotas();
                }
            }

    
        function ponderarTP (nota, porcentajePonderacion) {
            return nota * ponderaTP;
        }
        function ponderarEX (nota, porcentajePonderacion) {
            return nota * ponderaEX;
        }


    