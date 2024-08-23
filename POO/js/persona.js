class Persona {
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    saludar() {
        console.log('Hola, mi nombre es' + this.nombre +'y tengo' + this.edad +'años.'); //print
    }

    cumpleaños(){
        this.edad = this.edad + 1;
        console.log('¡Feliz Cumpleaños! Ahora tengo' + this.edad + ' años.'); //print
    }

    estudiar(){
        console.log('Estoy estudiando' + this.carrera);
    }
}
//Crear una instancia de la clase Persona
//const persona1 = new Persona("Ana", 22, "ingenieria industrial"); //declara la variable

function SaludoPersona1(){
    const persona1 = new Persona("Ana", 22, "Ingenieria Industrial");
    //Llamar a los metodos
    persona1.saludar();
}

