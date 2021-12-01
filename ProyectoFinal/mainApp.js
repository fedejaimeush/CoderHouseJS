"use strict"


//CLASE EVALUACION
class Evaluacion{
    constructor(nombre, tipo, contenido, nota){
        this.nombre = nombre;
        this.tipo = tipo;
        this.contenido = contenido;
        this.nota = parseFloat(nota);
    }
}


//ARRAY DE EVALUACIONES 
let evaluaciones = [];

//acceder a los datos del form que agrega nuevas evaluaciones 
let evForm = document.getElementById("evsForm");
let evfInputNombre = document.getElementById("testName").value;
let evfInputType = document.getElementById("testType").value;
let evfInputContent = document.getElementById("testContent").value;
let check = false; 

//evento del botón agregar del form

evForm.addEventListener("submit", agregarNuevaEvaluacion);

//función para validar el formulario que agrega nuevas evaluaciones

function validarNuevaEvaluacion(){
    evfInputNombre = document.getElementById("testName").value;
    evfInputType = document.getElementById("testType").value;
    evfInputContent = document.getElementById("testContent").value;
    console.log(`Los datos que se obtienen del form son ${evfInputNombre}, ${evfInputType}, ${ evfInputContent}`);

    if (evfInputNombre == '' || evfInputType == '' ||  evfInputContent == ''){
        alert('Para poder continuar es necesario completar todos los datos en el formulario.');
        check = false; 
    } else {
        check = true;
    }
}

//cargar evaluacion al array 
let divEvList = document.getElementById("evaluacionesList");
function agregarNuevaEvaluacion(e){
    e.preventDefault();
    validarNuevaEvaluacion();
    if (check == true ) {
        let opcion = confirm("Estás por agregar una nueva evaluación, ¿estás seguro?");
        if (opcion == true) {
            let newTest = new Evaluacion(evfInputNombre, evfInputType,  evfInputContent);
            evaluaciones.push(newTest);
            localStorage.setItem('evaluaciones', JSON.stringify(evaluaciones));
            evForm.reset();
            let evaluacionesParseadas = JSON.parse(localStorage.getItem('evaluaciones'));
            evaluacionesParseadas.forEach((evaluacion, indice)=> {
            divEvList.innerHTML += `
                        <div id="evaluacion${indice + 1}" class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${evaluacion.nombre}</h5>
                                <p class="card-text">Tipo: ${evaluacion.tipo}</p>
                                <p class="card-text">Contenido: ${evaluacion.contenido}</p>
                                <a href="#" class="card-link">Administrar notas</a>
                                <button type="button" class="btn btn-danger" id="boton${indice + 1}">Eliminar evaluacion</button>
                            </div>
                        </div>`
                })
            
                evaluacionesParseadas.forEach((evaluacion, indice) => {
                    document.getElementById(`boton${indice + 1}`).addEventListener('click', () => {
                        divEvList.removeChild(document.getElementById(`evaluacion${indice + 1}`));
                        evaluaciones.splice(indice,1);
                        localStorage.setItem('evaluaciones', JSON.stringify(evaluaciones)); 
                    })
                })
            };
        
        }else{
            alert('No se agregará una nueva evaluación')
        }
    }






