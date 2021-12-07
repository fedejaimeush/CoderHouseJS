'use strict'

// SCRIPT CARGA ESTUDIANTES

//clase estudiantes
class Estudiante {
    constructor(dni, nombre, apellido){
        this.dni = parseFloat(dni);
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//array de estudiantes
const listadoDeEstudiantes = [];



//acceder a los datos del form que carga los estudiantes
let formNuevoEstudiante = document.getElementById('formNuevoEstudiante')
let newStudentFormBtn = document.getElementById('btn-nuevoEstudiante')
let studentID = document.getElementById('studentID').value;
let studentName = document.getElementById('studentName').value;
let studentLastName = document.getElementById('studentLastName').value;
let checkStudent = false; 

//evento del boton agregar del form
newStudentFormBtn.addEventListener("click", agregarNuevoEstudiante);

//validar que el form tiene los datos requeridos para la carga
function validarNuevoEstudiante(){
     studentID = document.getElementById('studentID').value;
     studentName = document.getElementById('studentName').value;
     studentLastName = document.getElementById('studentLastName').value;
     console.log(`Los datos que se obtienen del form son ${studentID}, ${studentName}, ${studentLastName}`);
    if (studentID === '' || studentName === '' || studentLastName === '') {
        alert('Debes ingresar todos los datos del formulario. Por favor intenta nuevamente.')
        checkStudent = false;
    }else{
        checkStudent = true;
    }
}

//cargar estudiante al array
let divListaEstudiantes = document.getElementById("listaDeEstudiantes");
function agregarNuevoEstudiante(e) {
    e.preventDefault();
    validarNuevoEstudiante();
    if (checkStudent == true){
        let nuevoEstudianteRegistrado = new Estudiante (studentID, studentName, studentLastName);
        listadoDeEstudiantes.push(nuevoEstudianteRegistrado);
        localStorage.setItem('listadoDeEstudiantes', JSON.stringify(listadoDeEstudiantes));
        formNuevoEstudiante.reset();
        let estudiantesParseados = JSON.parse(localStorage.getItem('listadoDeEstudiantes'));
        estudiantesParseados.forEach((estudiante, indice) => {
            divListaEstudiantes.innerHTML += `
                <div id="estudiante${indice + 1}" class="stListContainer">
                    <div class="studentIDDiv">
                        <p>${estudiante.dni}</p>
                    </div>
                    <div class="studentNameDiv">
                        <p>${estudiante.nombre}</p>
                    </div>
                    <div class="studentLastNameDiv">
                        <p>${estudiante.apellido}</p>
                    </div>
                    <div class="deleteStudentDiv">
                    <button type="button" class="btn btn-danger" id="botonSt${indice + 1}">Eliminar estudiante</button>
                    </div>
                </div>
            `
        })

        estudiantesParseados.forEach((estudiante, indice) => {
            document.getElementById(`botonSt${indice + 1}`).addEventListener('click', () => {
                divListaEstudiantes.removeChild(document.getElementById(`estudiante${indice + 1}`));
                listadoDeEstudiantes.splice(indice, 1);
                localStorage.setItem('listadoDeEstudiantes', JSON.stringify(listadoDeEstudiantes));
            })
        })
    }else{
        alert("No fue posible añadir un nuevo estudiante.")
    }
};