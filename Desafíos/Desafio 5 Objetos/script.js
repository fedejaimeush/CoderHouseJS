class Estudiante {
    constructor(dni, nombre, apellido, mail, curso){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.curso = curso;
    }
    describir(){
        console.log(`El DNI ${this.dni} corresponde a ${this.nombre} ${this.apellido}. Su mail es ${this.mail}. Está inscripto al curso ${this.curso}.`)
    }
}

let estudiante1 = new Estudiante(35897948, "Nicolas", "Irianni", "nico.irianni@gmail.com", "2do año 1era división");
estudiante1.describir();
let estudiante2 = new Estudiante(32386704, "Florencia", "Ciampolli", "florenciaciampolli@gmail.com", "6too año 2da división");
estudiante2.describir();