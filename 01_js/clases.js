class Persona {
    static cantidadDePersonas = 0;
    static admin = "Coder";
    constructor(nombre, apellido, edad, ciudadNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudadNacimiento = ciudadNacimiento;
        //this.agregarPersona();
    }
    imprimir() {
        console.log(this);
    }
    printName = () => {
        console.log(this.nombre, this.apellido);
    };
    static agregarPersona = () => {
        Persona.cantidadDePersonas = Persona.cantidadDePersonas + 1;
    };
    static getResponsable = () => {
        console.log(Persona.admin);
    };
}

const alumno = new Persona("augusto", "prados", 31, "pergamino");

alumno.imprimir();
console.log(alumno.edad);
alumno.printName();
Persona.agregarPersona();

Persona.getResponsable();
