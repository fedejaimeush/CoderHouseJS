

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
let formNuevoEstudiante = $("#formNuevoEstudiante");
let newStudentFormBtn = $("#btn-nuevoEstudiante");
let studentID = $("#formNuevoEstudiante").find('input[name="studentID"]').val(); 
let studentName = $("#formNuevoEstudiante").find('input[name="studentName"]').val(); 
let studentLastName = $("#formNuevoEstudiante").find('input[name="studentLastName"]').val();
let checkStudent = false; 

//evento del boton agregar del form
$("#btn-nuevoEstudiante").click(agregarNuevoEstudiante(e));

//validar que el form tiene los datos requeridos para la carga
function validarNuevoEstudiante(){
     studentID = $("#formNuevoEstudiante").find('input[name="studentID"]').val(); 
     studentName = $("#formNuevoEstudiante").find('input[name="studentName"]').val(); 
     studentLastName = $("#formNuevoEstudiante").find('input[name="studentLastName"]').val();
     
    if (studentID === '' || studentName === '' || studentLastName === '') {
        alert('Debes ingresar todos los datos del formulario. Por favor intenta nuevamente.')
        checkStudent = false;
    }else{
        checkStudent = true;
    }
}

//cargar estudiante al array
let divListaEstudiantes = $("#listaDeEstudiantes");

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
            $(`#botonSt${indice + 1}`).click( () => {
                divListaEstudiantes.removeChild(document.getElementById(`estudiante${indice + 1}`));
                listadoDeEstudiantes.splice(indice, 1);
                localStorage.setItem('listadoDeEstudiantes', JSON.stringify(listadoDeEstudiantes));
            })
        })
    }else{
        alert("No fue posible a??adir un nuevo estudiante.")
    }
};

//ajax 

fetch('./estudiantes.json')
    .then(promesa => promesa.json())
    .then(students => {
        students.forEach(student => {
            divListaEstudiantes.innerHTML += `
            <div id="estudiante${indice + 1}" class="stListContainer">
                    <div class="studentIDDiv">
                        <p>${student.dni}</p>
                    </div>
                    <div class="studentNameDiv">
                        <p>${student.nombre}</p>
                    </div>
                    <div class="studentLastNameDiv">
                        <p>${student.apellido}</p>
                    </div>
                </div>
    `
        });
    })
    .catch(error => console.error(error))