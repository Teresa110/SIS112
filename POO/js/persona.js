class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es' + this.nombre;
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }
   
    Universidad() {
      return 'Estoy en la universidad ' + this.universidad;
    }


    nuevosaludar() {
        this.nombre = prompt('Introduce tu nombre Por favor:')
        return 'Hola, mi nombre es ' + this.nombre;
    }

    nuevocumpleanios() {
        this.edad = prompt('Introduce tu edad Por favor:')
        return '¡Felicidades! tienes ' + this.edad + ' años.';

    }

    nuevoestudiar() {
        this.carrera = prompt('Introduce la carrera que estudias Por favor:' )
        return 'Estoy estudiando ' + this.carrera;
    }

    nuevauniversidad() {
        this.universidad = prompt('Introduce la universidad donde estudias Por favor:')
        return 'Estoy en la universidad ' + this.universidad;
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Teresa', 18, 'Ingenieria Industrial', 'UCB');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  // Función para universidad
  function botonUniversidad() {
    universidad.textContent = persona.Universidad();

  }

  // Funcion introduce nombre
  function botonIntroduce_Saludar() {
    saludar.textContent = persona.nuevosaludar();
  }

  // Funcion introduce cumpleaños
  function botonIntroduce_Edad() {
    edad.textContent = persona.nuevocumpleanios();
  }

  // Funcion introduce estudiar
  function botonIntroduce_Carrera() {
    carrera.textContent = persona.nuevoestudiar();
  }

  // Funcion introduce universidad
  function botonIntroduce_Universidad() {
    universidad.textContent = persona.nuevauniversidad();
  }

 // Funcion eliminar nombre
  function botonEliminar_Saludar() {
    saludar.textContent = '';
  }

  //Funcion eliminar cumpleaños
  function botonEliminar_Edad() {
    edad.textContent = '';
  }

  // Funcion eliminar estudiar
  function botonEliminar_Carrera() {
    carrera.textContent = '';
  }

  // Funcion eliminar universidad

  function botonEliminar_Universidad() {
    universidad.textContent = '';
  }


