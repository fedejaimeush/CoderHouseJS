"use strict"

let teacherName = prompt("¡Hola, profe! Para iniciar ingresa tu nombre y apellido.");

//CONFIGURAR SALUDO A LA APP
    //identificar elemento parent

const greetingDiv = document.getElementById("teacherGreet");

    //crear elemento div
let greetingTitleContainer = document.createElement("div");
greetingTitleContainer.innerHTML = `<div class="col-md 12">
                                    <h2>¡${teacherName}, te damos la bienvenida!</h2>
                                    </div>`;

    //agregar nuevo contenedor con el saludo personalizado
greetingDiv.appendChild(greetingTitleContainer);

//CLASE EVALUACION
class Evaluacion{
    constructor(nombre, tipo, fecha){
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha = fecha;
    }
}


const evaluacion1 = new Evaluacion("Trabajo Práctico N° 1", "Trabajo Práctico", "22/11/2021 12:30");
const evaluacion2 = new Evaluacion("Trabajo Práctico N° 2", "Trabajo Práctico", "29/11/2021 13:00");
const evaluacion3 = new Evaluacion("Examen N° 1", "Examen", "05/12/2021 12:30");
const evaluacion4 = new Evaluacion("Examen N° 2", "Examen", "10/12/2021 13:30");

//ARRAY DE EVALUACIONES 
var evaluaciones = [evaluacion1, evaluacion2, evaluacion3, evaluacion4];

//CARGAR ARRAY DE EVALUACIONES EN EL DOM DE LA APP

let divEvList = document.getElementById("evaluacionesList");

evaluaciones.forEach((evaluacion, indice)=> {
    divEvList.innerHTML += `
    <div class="row" id="evaluacion${indice + 1}">
        <div class="col-md-4">
            <p> ${evaluacion.nombre}</p>
        </div>
        <div class="col-md-4">
        <p> ${evaluacion.tipo}</p>
        </div>
        <div class="col-md-4">
        <p> ${evaluacion.fecha}</p>
        </div>
    </div>`
 })

 //CLASE ESTUDIANTES
 class Estudiante{
     constructor(nombre, apellido, promedio){
         this.nombre = nombre;
         this.apellido = apellido;
         this.promedio = parseFloat(promedio);
     }
 }

 const estudiante1 = new Estudiante("Franco", "Pierotti", 8);
 const estudiante2 = new Estudiante("Leandro", "Gonzalez", 8.25);
 const estudiante3 = new Estudiante("Santino", "Gonzalez", 7);
 const estudiante4 = new Estudiante("Francisco", "Godoy", 5);
 const estudiante5 = new Estudiante("Miqueas", "Maidana", 6);

 var estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5];

