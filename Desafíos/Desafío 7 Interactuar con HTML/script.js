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
        <div id="evaluacion${indice + 1}" class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${evaluacion.nombre}</h5>
                <p class="card-text">Tipo: ${evaluacion.tipo}</p>
                <p class="card-text">Fecha: ${evaluacion.fecha}</p>
                <a href="#" class="card-link">Administrar notas</a>
            </div>
        </div>`
 })

 //CLASE ESTUDIANTES
 class Estudiante{
     constructor(nombre, apellido, nota, promedio){
         this.nombre = nombre;
         this.apellido = apellido;
         this.nota = parseFloat(nota)
         this.promedio = parseFloat(promedio);
     }
 }

 const estudiante1 = new Estudiante("Franco", "Pierotti", 6, 8);
 const estudiante2 = new Estudiante("Leandro", "Gonzalez", 7, 8.25);
 const estudiante3 = new Estudiante("Santino", "Gonzalez", 8, 7);
 const estudiante4 = new Estudiante("Francisco", "Godoy", 9, 5);
 const estudiante5 = new Estudiante("Miqueas", "Maidana", 7,  6);

 var estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5];


//CARGAR OBJETO ESTUDIANTE EN EL DOM
let divGradesList = document.getElementById("bodyGradesTable");

estudiantes.forEach((estudiante, indice) => {
    divGradesList.innerHTML += 
    `<tr id="estudiante${indice + 1}"> 
        <td><h5> ${estudiante.nombre} ${estudiante.apellido} </h5></td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p> ${estudiante.nota} </p> </td>
        <td><p>${estudiante.promedio}</p></td>    
    </tr>
    `
})