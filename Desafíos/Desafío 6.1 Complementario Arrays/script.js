"use strict"

class Estudiante {
    constructor(dni, nombre, apellido, curso){
        this.dni = parseFloat(dni);
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso; 
    }
    describir(){
        console.log(`El DNI ${this.dni} corresponde a ${this.nombre} ${this.apellido}. Está inscripto al curso ${this.curso}.`)
    }
}

const estudiantesArray = [];

//función que carga nuevos estudiantes al array

function cargarEstudiante(){
    do{
        var cargaEstudianteInicio = prompt("¿Desea ingresar un estudiante?").toLowerCase();
        if(cargaEstudianteInicio === "no"){
            break;
        }else{
            const estudianteDNI = parseFloat(prompt("Ingresa el DNI del estudiante")); 
            const estudianteNombre = prompt("Ingresa el nombre del estudiante");
            const estudianteApellido = prompt("Ingresa el apellido del estudiante");
            const estudianteCurso = prompt("Ingresa el curso al que pertenece el/la estudiane");
            estudiantesArray.push(new Estudiante(estudianteDNI, estudianteNombre, estudianteApellido, estudianteCurso) )
        }
    }while (cargaEstudianteInicio !== "no") 
}

console.log(estudiantesArray);

const est1 = new Estudiante(35897949, "Federico", "Jaime", "3ero 2da");
estudiantesArray.push(est1);
const est2 = new Estudiante(32386705, "Nicolas", "Irianni", "3ero 2da");
estudiantesArray.push(est2);
const est3 = new Estudiante(35649393, "Verónica", "Barón", "1ero 2da");
estudiantesArray.push(est3);
const est4 = new Estudiante(33597364, "Florencia", "Ciampoli", "1ero 2da");
estudiantesArray.push(est4);

for(var estudiante of estudiantesArray){
    document.write(`<br/>El DNI ${estudiante.dni} corresponde a ${estudiante.nombre} ${estudiante.apellido}. Está inscripto al curso ${estudiante.curso}.<br/>`)
}

//función que busca estudiantes según el numero de dni ingresado utilizando el método find
function buscarEstudiante(){
    let valorBuscado = parseFloat(prompt("Ingrese el DNI del estudiante que quiere buscar"));
    let busquedaResultado = estudiantesArray.find(estudiante => {
        return estudiante.dni === valorBuscado;
        
    });
    console.log(busquedaResultado);
}

// ordena el array utilizando el método sort de acuerdo al número de dni

estudiantesArray.sort((estudiante1, estudiante2)=> {
    if (estudiante1.dni < estudiante2.dni) {
        return -1;
    }else if (estudiante1.dni > estudiante2.dni) {
        return 1;
    } else {
        return 0;
    }
});

console.log(estudiantesArray)



  
