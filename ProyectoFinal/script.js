"use strict"

//objeto estudiantes
class Estudiante{
    constructor(dni, nombre, apellido, edad, curso, promedio){
        this.dni = parseFloat(dni);
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.edad = parseFloat(edad);
        this.curso = curso;
        this.promedio = parseFloat(promedio);
    }
    detallar(){
        console.log(`El dni ingresado N° ${this.dni} corresponde a ${this.nombre} ${this.apellido}. Su edad es ${this.edad}. Es estudiante del curso ${this.curso}. Su promedio es de ${this.promedio}`)
    }
}

//array estudiantes

const estudiantes = [];

// función que carga nuevos estudiantes al array
function cargarEstudiante(){
    do{
        var cargaEstudianteInicio = prompt("¿Desea ingresar un estudiante?").toLowerCase();
        if(cargaEstudianteInicio === "no"){
            break;
        }else{
            const estudianteDNI = parseFloat(prompt("Ingresa el DNI del estudiante")); 
            const estudianteNombre = prompt("Ingresa el nombre del estudiante");
            const estudianteApellido = prompt("Ingresa el apellido del estudiante");
            const estudianteEdad = parseFloat(prompt("Ingrese la edad del estudiante"));
            const estudianteCurso = prompt("Ingresa el curso al que pertenece el/la estudiane");
            const estudiantePromedio = parseFloat(prompt("Ingrese el promedio del estudiante"));
            estudiantes.push(new Estudiante(estudianteDNI, estudianteNombre, estudianteApellido, estudianteEdad, estudianteCurso, estudiantePromedio))
        }
    }while (cargaEstudianteInicio !== "no") 
}

console.log(estudiantes);

const est1 = new Estudiante(35897949, "Federico", "Jaime", 29, "3ero 2da", 8.52);
estudiantes.push(est1);
const est2 = new Estudiante(32386705, "Nicolas", "Irianni", 35, "3ero 2da", 9.27);
estudiantes.push(est2);
const est3 = new Estudiante(35649393, "Verónica", "Barón", 29, "1ero 2da", 5.46);
estudiantes.push(est3);
const est4 = new Estudiante(33597364, "Florencia", "Ciampoli", 34, "1ero 2da", 6.25);
estudiantes.push(est4);

document.write(`<br/> Las y los estudiantes cargada/os en el sistema son: <br/>`)

for(var estudiante of estudiantes){
    document.write(`<br/>El DNI ${estudiante.dni} corresponde a ${estudiante.nombre} ${estudiante.apellido} de ${estudiante.edad}. Está inscripto al curso ${estudiante.curso} y su promedio es ${estudiante.promedio}.<br/>`)
}

//aviso estudiantes con riesgo de ser desaprobados

var estudianteDesaprobado = estudiantes.filter(estudiante => estudiante.promedio <= 5.49);
console.log('Hay estudiantes con riesgo académico: ');
console.log(estudianteDesaprobado);

//función que busca estudiantes según el numero de dni ingresado utilizando el método find
function buscarEstudiante(){
    let valorBuscado = parseFloat(prompt("Ingrese el DNI del estudiante que quiere buscar"));
    let busquedaResultado = estudiantes.find(estudiante => {
        return estudiante.dni === valorBuscado;
        
    });
    console.log(busquedaResultado);
}

// ordena el array utilizando el método sort de acuerdo al promedio

estudiantes.sort((estudiante1, estudiante2)=> {
    if (estudiante1.promedio < estudiante2.promedio) {
        return -1;
    }else if (estudiante1.promedio > estudiante2.promedio) {
        return 1;
    } else {
        return 0;
    }
});

console.log(estudiantes);

//objeto materias

class Materia{
    constructor(codigo, nombre, curso, docente){
        this.codigo = codigo; 
        this.nombre = nombre;
        this.curso = curso;
        this.docente = docente; 
    }
}

// array materias

const  materias = [];

//funcion que carga nuevas materias
function cargarMateria(){
    do{
        var cargarMateriaInicio = prompt("¿Desea cargar una nueva materia?").toLowerCase();
        if(cargarMateriaInicio === "no"){
            break;
        }else{
            const materiaCodigo = prompt("Ingresa el código de la materia. Recordá que se construye con las iniciales y el curso. Por ejemplo: BIO12");
            const materiaNombre = prompt("Ingresa el nombre completo de la materia");
            const materiaCurso = prompt("Ingresa el curso asociado a la materia");
            const materiaDocente = prompt("Ingresa el nombre completo del docente a cargo de la materia")
            materias.push(new Materia(materiaCodigo, materiaNombre, materiaCurso, materiaDocente));
        }
    } while (cargarMateriaInicio !== "no")
}

console.log(materias);

const mat1 = new Materia("BIO11", "Biología", "1ero 1era", "John Doe");
materias.push(mat1);
const mat2 = new Materia("CDC11", "Construcción de la Ciudadania", "1ero 1era", "Jane Doe");
materias.push(mat2);
const mat3 = new Materia("ING12", "Inglés", "1ero 2da", "Peter Doe");
materias.push(mat3);
const mat4 = new Materia("MAT12", "Matemáticas", "1ero 2da", "Maddie Doe");
materias.push(mat4);

document.write(`<br/> Las materias cargadas en el sistema son: <br/>`)

for(var materia of materias){
    document.write(`<ul><li>Código: ${materia.codigo}</li>`);
    document.write(`<li>Nombre: ${materia.nombre}</li>`);
    document.write(`<li>Curso asignado: ${materia.curso}</li>`);
    document.write(`<li>Docente a cargo: ${materia.docente}</li></ul>`);
}

//objeto evaluaciones
class Evaluacion{
    constructor(numeroDeOrden, tipo, nota){
        this.numeroDeOrden = parseFloat(numeroDeOrden);
        this.tipo = tipo;
        this.nota = parseFloat(nota);
    }
    ponderar(){
        if(this.tipo === "tp"){
            return this.nota * 0.6;
        }else if(this.tipo === "ev"){
            return this.nota *0.4;
        }
    }
}

//array evaluaciones

const evaluaciones = [];

//funcion que carga nuevas evaluaciones
function cargarEvaluacion(){
    do{
        var cargarEvaluacionInicio = prompt("¿Desea cargar una nueva evaluacion al registro?").toLowerCase();
        if(cargarEvaluacionInicio === "no"){
            break;
        }else{
            const evaluacionOrden = prompt("Ingresa el N° de orden. Recordá que son 3 dígitos. Por ej: 001");
            const evaluacionTipo = prompt("Ingresa el tipo de evaluacion. Recuerda indicar TP si es un Trabajo Práctico o EX si es un Examen.").toLowerCase();
            const evaluacionNota = parseFloat(prompt("Ingresa la nota de la evaluacion"))
            evaluaciones.push(new Evaluacion(evaluacionOrden, evaluacionTipo, evaluacionNota));
            }
    } while (cargarEvaluacionInicio !== "no")
}

console.log(evaluaciones);

const ev1 = new Evaluacion("001", "tp", 8);
evaluaciones.push(ev1);
const ev2 = new Evaluacion("002", "tp", 7);
evaluaciones.push(ev2);
const ev3 = new Evaluacion("003", "ev", 9);
evaluaciones.push(ev3);
const ev4 = new Evaluacion("004", "ev", 10);
evaluaciones.push(ev4);

for(var evaluacion of evaluaciones){
    console.log(`Las notas cargadas en el sistema son: `);
    console.log(`N° de orden: ${evaluacion.numeroDeOrden}. La nota es ${evaluacion.nota} y su valor ponderado es ${evaluacion.ponderar()}`);
}
