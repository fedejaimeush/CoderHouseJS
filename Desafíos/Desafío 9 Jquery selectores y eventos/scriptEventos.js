"use strict"

//CLASE EVALUACION
class Evaluacion{
    constructor(nombre, tipo, contenido){
        this.nombre = nombre;
        this.tipo = tipo;
        this.contenido = contenido;
    }

    returnData() {
        return `
        <div class="card" id="test${this.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <p class="card-text">${this.tipo}</p>
                <p class="card-text">${this.contenido}</p>
            </div>
        </div>
    `
    }
}

 
let evaluaciones = [];
let id = 1; 

$(() => {
    


    $('#evsForm').submit((e) => {
        e.preventDefault()

        let datForm = new FormData(e.target)

        let testsFormulario = new Evaluacion(id, datForm.get("testName"), datForm.get("testType"), datForm.get("testContent"))

        evaluaciones.push(testsFormulario)
        console.log(evaluaciones)
        $('#evsForm').trigger("reset");
        id++
    })

    $('#mostrarEvaluaciones').click(() => {
        console.log(evaluaciones)
        evaluaciones.forEach( evaluacion => {
            $('#evaluacionesList').append(evaluacion.returnData());
        })
    })
})









 