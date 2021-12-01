'use strict'

// SCRIPT CARGA ESTUDIANTES

const cargarDatos = () => {
    cargarEstudiantes();
}



//clase estudiantes
class Estudiantes {
    constructor(dni, nombre, apellido){
        this.dni = parseFloat(dni);
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//array de estudiantes
const listadoDeEstudiantes = [];

const getDataEstudiante = () => {
    let studentID = document.getElementById('studentID').value;
    let studentName = document.getElementById('studentName').value;
    let studentLastName = document.getElementById('studentLastName').value;

    //valido la entrada de los datos
    if (studentID === '' || studentName === '' || studentLastName === '') {
        alert('Debes ingresar todos los datos del formulario. Por favor intenta nuevamente.')
        document.getElementById('formNuevoEstudiante').reset();
    }else{
        let nuevoEstudianteRegistrado = new Estudiantes(studentID, studentName, studentLastName);
        return nuevoEstudianteRegistrado;
    }
};

const clickRegistrarEstudiante = document.getElementById('btn-nuevoEstudiante');
clickRegistrarEstudiante.addEventListener('click', () => {
    let obtenerEstudiante = getDataEstudiante();
    listadoDeEstudiantes.push(obtenerEstudiante);
    localStorage.setItem(`listadoDeEstudiantes`, JSON.stringify(listadoDeEstudiantes));

    const estudianteOK = document.getElementById("estudianteOK");
    const estudianteGenerado = mostrarEstudiantesDom();
    estudianteOK.innerHTML = estudianteGenerado;
    document.getElementById('formNuevoEstudiante').reset();
})

const mostrarEstudiantesDom = () => {
    let acumulador = ``;
    listadoDeEstudiantes.forEach((e) => {
        acumulador += `<li class="d-flex justify-content-around bg-light rounded-pill list-group-item container-fluid">
        <div id="dni" class="boxAlumnos">${e.dni}</div>
        <div id="nombre" class="boxAlumnos">${e.nombre}</div>
        <div id="apellido" class="boxAlumnos">${e.apellido}</div>
      </li>`;
    });
    return acumulador;
}

let estudiantesEnLocal = JSON.parse(localStorage.getItem(`listadoDeEstudiantes`));

const cargarEstudiantes = () => {

  
    estudiantesEnLocal.forEach((e) => {
      nuevoEstudianteRegistrado = new Estudiantes(e.dni, e.nombre, e.apellido)
      obtenerEstudiante = nuevoEstudianteRegistrado;
      listadoDeEstudiantes.push(obtenerEstudiante);
      estudianteGenerado = mostrarEstudiantesDom();
  
      estudianteOK.innerHTML = estudianteGenerado;
      });
  };

  const borrarListaEstudiantes = () => {
      localStorage.removeItem(`listadoDeEstudiantes`);
      let limpiarDom = document.getElementById("estudianteOK");
      while(limpiarDom.firstChild){
          limpiarDom.removeChild(limpiarDom.firstChild);
      }
  }

document.getElementById('btn-eliminarListadoEstudiantes').addEventListener('click', borrarListaEstudiantes)
