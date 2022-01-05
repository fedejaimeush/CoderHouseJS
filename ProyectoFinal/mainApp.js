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
let evForm = $("#evsForm"); 
let evfInputNombre = $("#evsForm").find('input[name="testName"]').val();
let evfInputType = $("#evsForm").find('input[name="testType"]').val(); 
let evfInputContent = $("#evsForm").find('input[name="testContent"]').val();  
let check = false; 

//evento del botón agregar del form
$("#evsForm").submit(agregarNuevaEvaluacion(e));

//función para validar el formulario que agrega nuevas evaluaciones

function validarNuevaEvaluacion(){
    evfInputNombre = $("#evsForm").find('input[name="testName"]').val();
    evfInputType = $("#evsForm").find('input[name="testType"]').val(); 
    evfInputContent = $("#evsForm").find('input[name="testContent"]').val();  
    

    if (evfInputNombre == '' || evfInputType == '' ||  evfInputContent == ''){
        alert('Para poder continuar es necesario completar todos los datos en el formulario.');
        check = false; 
    } else {
        check = true;
    }
}

//cargar evaluacion al array 
let divEvList = $("#evaluacionesList");
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
            $("#evaluacionesList").append(
                `<div id="evaluacion${indice + 1}" class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${evaluacion.nombre}</h5>
                                <p class="card-text">Tipo: ${evaluacion.tipo}</p>
                                <p class="card-text">Contenido: ${evaluacion.contenido}</p>
                                <a href="#" class="card-link">Administrar notas</a>
                                <button type="button" class="btn btn-danger" id="boton${indice + 1}">Eliminar evaluacion</button>
                            </div>
                        </div>`
            );
            
            
                
                        
            })
            
                evaluacionesParseadas.forEach((evaluacion, indice) => {
                    $(`#boton${indice + 1}`).click( () => {
                        $("#evaluacionesList").removeChild($("#boton${indice + 1}"));
                        evaluaciones.splice(indice,1);
                        localStorage.setItem('evaluaciones', JSON.stringify(evaluaciones)); 
                    })
                })
            };
        
        }else{
            alert('No se agregará una nueva evaluación')
        }
    }

//ajax 

fetch('./evaluaciones.json')
    .then(promesa => promesa.json())
    .then(tests => {
        tests.forEach(evaluacion => {
            divEvList.innerHTML += `
            <div class="card" id="evaluacion${evaluacion.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${evaluacion.nombre}</h5>
                <p class="card-text">${evaluacion.tipo}</p>
                <p class="card-text">${evaluacion.contenido}</p>
            </div>
        </div>
    `
        });
    })
    .catch(error => console.error(error))





