"use strict"

//objeto estudiantes
class Estudiante{
    constructor(dni, nombre, apellido, edad, curso, promedio){
        this.dni = parseFloat(dni);
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.edad = parseFloat(edad);
        this.curso = curso;
        this.promedio = parseFloat(promedio);
    }
    detallar(){
        console.log(`El dni ingresado N° ${this.dni} corresponde a ${this.nombre} ${this.apellido}. Su edad es ${this.edad}. Es estudiante del curso ${this.curso}. Su promedio es de ${this.promedio}`)
    }
}

//array estudiantes

const estudiantes = [];

// función que carga nuevos estudiantes al array
function cargarEstudiante(){
    do{
        var cargaEstudianteInicio = prompt("¿Desea ingresar un estudiante?").toLowerCase();
        if(cargaEstudianteInicio === "no"){
            break;
        }else{
            const estudianteDNI = parseFloat(prompt("Ingresa el DNI del estudiante")); 
            const estudianteNombre = prompt("Ingresa el nombre del estudiante");
            const estudianteApellido = prompt("Ingresa el apellido del estudiante");
            const estudianteEdad = parseFloat(prompt("Ingrese la edad del estudiante"));
            const estudianteCurso = prompt("Ingresa el curso al que pertenece el/la estudiane");
            const estudiantePromedio = parseFloat(prompt("Ingrese el promedio del estudiante"));
            estudiantes.push(new Estudiante(estudianteDNI, estudianteNombre, estudianteApellido, estudianteEdad, estudianteCurso, estudiantePromedio))
        }
    }while (cargaEstudianteInicio !== "no") 
}

console.log(estudiantes);

const est1 = new Estudiante(35897949, "Federico", "Jaime", 29, "3ero 2da", 8.52);
estudiantes.push(est1);
const est2 = new Estudiante(32386705, "Nicolas", "Irianni", 35, "3ero 2da", 9.27);
estudiantes.push(est2);
const est3 = new Estudiante(35649393, "Verónica", "Barón", 29, "1ero 2da", 5.46);
estudiantes.push(est3);
const est4 = new Estudiante(33597364, "Florencia", "Ciampoli", 34, "1ero 2da", 6.25);
estudiantes.push(est4);

for(var estudiante of estudiantes){
    document.write(`<br/>El DNI ${estudiante.dni} corresponde a ${estudiante.nombre} ${estudiante.apellido} de ${estudiante.edad}. Está inscripto al curso ${estudiante.curso} y su promedio es ${estudiante.promedio}.<br/>`)
}

//aviso estudiantes con riesgo de ser desaprobados

var estudianteDesaprobado = estudiantes.filter(estudiante => estudiante.promedio <= 5.49);
console.log('Hay estudiantes con riesgo académico: ');
console.log(estudianteDesaprobado);

//función que busca estudiantes según el numero de dni ingresado utilizando el método find
function buscarEstudiante(){
    let valorBuscado = parseFloat(prompt("Ingrese el DNI del estudiante que quiere buscar"));
    let busquedaResultado = estudiantes.find(estudiante => {
        return estudiante.dni === valorBuscado;
        
    });
    console.log(busquedaResultado);
}

// ordena el array utilizando el método sort de acuerdo al promedio

estudiantes.sort((estudiante1, estudiante2)=> {
    if (estudiante1.promedio < estudiante2.promedio) {
        return -1;
    }else if (estudiante1.promedio > estudiante2.promedio) {
        return 1;
    } else {
        return 0;
    }
});

console.log(estudiantes);