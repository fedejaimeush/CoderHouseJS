let divEvaluaciones = document.getElementById("evaluacionesList");

fetch('./evaluaciones.json')
    .then(promesa => promesa.json())
    .then(tests => {
        tests.forEach(evaluacion => {
            divEvaluaciones.innerHTML += `
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