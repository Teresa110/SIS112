class Materias {
  constructor(nombremateria, sigla, docente, horario, aula, prerrequisito, carrera, universidad, cantidadinscritos) {
    this.nombremateria = nombremateria;
    this.sigla = sigla;
    this.docente = docente;
    this.horario = horario;
    this.aula = aula;
    this.prerrequisito = prerrequisito;
    this.carrera = carrera;
    this.universidad = universidad;
    this.cantidadinscritos = cantidadinscritos
  }


  Asignatura() {
    return 'Materia: ' + this.nombremateria;
  }

  siglas() {
    return 'Sigla: ' + this.sigla;
  }

  Docente() {
    return 'Docente:' + this.docente;
  }
 
  Horario() {
      return 'Horario: ' + this.horario;
    }

  Aula(){
      return 'Aula: ' + this.aula;
  }

  Prerrequisito(){
      return 'Prerequisito: ' + this.prerrequisito;
  }

  Carrera(){
      return 'Carrera:' + this.carrera;
  }

  Universidad(){
      return 'Universidad: ' + this.universidad;
  }

  CantidadDeInscritos(){
      return 'Inscritos: ' + this.cantidadinscritos;
  }

  //MODIFICAR ASIGNATURAS 
  Modificar_Asignatura(){
    this.nombremateria = prompt("Ingrese el nombre de la materia porfavor")
    return 'Materia: ' + this.nombremateria;
  }

  //MODIFICAR SIGLAS
  Modificar_Siglas() {
      this.sigla = prompt("Ingrese la sigla porfavor ")
      return 'Sigla: ' + this.sigla;
  }
  
  //MODIFICAR DOCENTE
  Modificar_Docente() {
      this.docente = prompt("Ingrese el nombre del docente porfavor")
      return 'Docente: ' + this.docente;
  }
  
  //MODIFICAR HORARIO
  Modificar_Horario(){
      this.horario = prompt("Ingrese el horario porfavor ")
      return 'Horario: ' + this.horario;
  }

  //MODIFICAR AULA
  Modificar_Aula(){
      this.aula = prompt("Ingrese el aula en que se da esta materia porfavor ")
      return 'Aula: ' + this.aula;
  }
  
  //MODIFICAR PRERREQUISITO
  Modificar_Prerrequisito(){
      this.prerequisito = prompt("Ingrese el prerequisito de la materia porfavor ")
      return 'Prerequisito: ' + this.prerrequisito;
  }
  
  //MODIFICAR CARRERA
  Modificar_Carrera(){
      this.carrera = prompt("Ingrese la carrera que estudia porfavor ")
      return 'Carrera: ' + this.carrera;
  }

  //MODIFICAR UNIVERSIDAD
  Modificar_Universidad(){
      this.universidad = prompt("Ingrese la universidad en la que estudia porfavor ")
      return 'Universidad: ' + this.universidad;
  }
  
  //MODIFICAR CANTIDAD DE INSCRITOS
  Modificar_CantidadDeInscritos(){
      this.cantidadinscritos = prompt("Ingrese la cantidad de inscritos porfavor ")
      return 'Inscritos: ' + this.cantidadinscritos;
  }

  Eliminar_Asignatura() {
      return ""
  }

  Eliminar_Siglas() {
      return ""
  }

  Eliminar_Docente() {
      return ""
  }

  Eliminar_Horario() {
      return ""
  }

  Eliminar_Aula() {
      return ""
  }
  Eliminar_Prerrequisito() {
      return ""
  }

  Eliminar_Carrera() {
      return ""
  }

  Eliminar_Universidad() {
      return ""
  }

  Eliminar_CantidadInscritos() {
      return ""
  }

}

// Crear una instancia de la clase Materia
const materia1 = new Materias('CALCULO I', 'MAT-132', 'ASPIAZU MELGAR VICTOR HUGO', 'LUNES 07:30 - 09:00, MIERCOLES 07:30 - 09:00', '10 AULA A-N4', 'MAT-030', 'Ingenieria Industrial', 'UCB', '33');
const materia2 = new Materias('ANTROPOLOGÍA Y VALORES', 'FHC-101', 'DE LA BARRA BARRA EXALTA GABRIELA', 'MARTES 09:10 - 10:40, JUEVES 09:10 - 10:40', 'MARTES 10 AULA A-N4, JUEVES B 2-1', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '62');
const materia3 = new Materias('FÍSICA I Y LABORATORIO', 'FIS-111', 'LOBO LIMPIAS VICTOR HUGO', 'LUNES 09:10 - 10:40, MIERCOLES 09:10 - 10:40', 'E 2-5', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '45');
const materia4 = new Materias('MANUFACTURA Y MECANIZADO', 'IND-112', 'SALVATIERRA ARANCIBIA JORGE ENRIQUE', 'MARTES 07:30 - 09:00, JUEVES 07:30 - 09:00, VIERNES 07:30 - 09:00', 'MARTES 12 AULA A-N4, JUEVES F 1-2 (LAB. PROCESOS), VIERNES F 1-2 (LAB. PROCESOS)', 'IND-111', 'Ingenieria Industrial', 'UCB', '14');
const materia5 = new Materias('PROBABILIDAD Y ESTADÍSTICA I', 'MAT-142', 'BARCA MAGARZO CARMEN SILVIA', 'MARTES 10:50 - 12:20, JUEVES 10:50 - 12:20', 'D 2-1 (LAB. CÓMPUTO 2)', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '33');
const materia6 = new Materias('PROGRAMACIÓN I', 'SIS-112', 'ESCALANTE USTARIZ EDDY', 'LUNES 10:50 - 12:20, VIERNES 09:10 - 11:35', 'C 2-2 (LAB. CÓMPUTO 5)', 'SIS-111', 'Ingenieria Industrial', 'UCB', '15');

// Inicializar los elementos HTML
const nombremateria = document.getElementById('nombremateria');
const sigla = document.getElementById('sigla');
const docente = document.getElementById('docente');
const horario = document.getElementById('horario');
const aula = document.getElementById('aula');
const prerrequisito = document.getElementById('prerrequisito');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');
const cantidadinscritos = document.getElementById('cantidadinscritos');

function botonMateria1() {
  nombremateria.textContent = materia1.Asignatura();
  sigla.textContent = materia1.siglas();
  docente.textContent = materia1.Docente();
  horario.textContent = materia1.Horario();
  aula.textContent = materia1.Aula();
  prerrequisito.textContent = materia1.Prerrequisito();
  carrera.textContent = materia1.Carrera();
  universidad.textContent = materia1.Universidad();
  cantidadinscritos.textContent = materia1.CantidadDeInscritos();
}

function botonMateria2() {
  nombremateria.textContent = materia2.Asignatura();
  sigla.textContent = materia2.siglas();
  docente.textContent = materia2.Docente();
  horario.textContent = materia2.Horario();
  aula.textContent = materia2.Aula();
  prerrequisito.textContent = materia2.Prerrequisito();
  carrera.textContent = materia2.Carrera();
  universidad.textContent = materia2.Universidad();
  cantidadinscritos.textContent = materia2.CantidadDeInscritos();
}

function botonMateria3() {
  nombremateria.textContent = materia3.Asignatura();
  sigla.textContent = materia3.siglas();
  docente.textContent = materia3.Docente();
  horario.textContent = materia3.Horario();
  aula.textContent = materia1.Aula();
  prerrequisito.textContent = materia3.Prerrequisito();
  carrera.textContent = materia3.Carrera();
  universidad.textContent = materia3.Universidad();
  cantidadinscritos.textContent = materia3.CantidadDeInscritos();
}

function botonMateria4() {
  nombremateria.textContent = materia4.Asignatura();
  sigla.textContent = materia4.siglas();
  docente.textContent = materia4.Docente();
  horario.textContent = materia4.Horario();
  aula.textContent = materia4.Aula();
  prerrequisito.textContent = materia4.Prerrequisito();
  carrera.textContent = materia4.Carrera();
  universidad.textContent = materia4.Universidad();
  cantidadinscritos.textContent = materia4.CantidadDeInscritos();
}

function botonMateria5() {
  nombremateria.textContent = materia5.Asignatura();
  sigla.textContent = materia5.siglas();
  docente.textContent = materia5.Docente();
  horario.textContent = materia5.Horario();
  aula.textContent = materia5.Aula();
  prerrequisito.textContent = materia5.Prerrequisito();
  carrera.textContent = materia5.Carrera();
  universidad.textContent = materia5.Universidad();
  cantidadinscritos.textContent = materia5.CantidadDeInscritos();
}

function botonMateria6() {
  nombremateria.textContent = materia6.Asignatura();
  sigla.textContent = materia6.siglas();
  docente.textContent = materia6.Docente();
  horario.textContent = materia6.Horario();
  aula.textContent = materia6.Aula();
  prerrequisito.textContent = materia6.Prerrequisito();
  carrera.textContent = materia6.Carrera();
  universidad.textContent = materia6.Universidad();
  cantidadinscritos.textContent = materia6.CantidadDeInscritos();
}

//FUNCION MODIFICAR NOMBRE MATERIAS
function botonModificarNombreMateria1() {
  nombremateria.textContent = materia1.Modificar_Asignatura();
}
function botonModificarNombreMateria2() {
  nombremateria.textContent = materia2.Modificar_Asignatura();
}
function botonModificarNombreMateria3() {
  nombremateria.textContent = materia3.Modificar_Asignatura();
}
function botonModificarNombreMateria4() {
  nombremateria.textContent = materia4.Modificar_Asignatura();
}
function botonModificarNombreMateria5() {
  nombremateria.textContent = materia5.Modificar_Asignatura();
}
function botonModificarNombreMateria6() {
  nombremateria.textContent = materia6.Modificar_Asignatura();
}

//FUNCION MODIFICAR SIGLAS
function botonModificarSigla1() {
  sigla.textContent = materia1.Modificar_Siglas();
}
function botonModificarSigla2() {
  sigla.textContent = materia2.Modificar_Siglas();
}
function botonModificarSigla3() {
  sigla.textContent = materia3.Modificar_Siglas();
}
function botonModificarSigla4() {
  sigla.textContent = materia4.Modificar_Siglas();
}
function botonModificarSigla5() {
  sigla.textContent = materia5.Modificar_Siglas();
}
function botonModificarSigla6() {
  sigla.textContent = materia6.Modificar_Siglas();
}

//FUNCION MODIFICAR DOCENTE
function botonModificarDocente1() {
  docente.textContent = materia1.Modificar_Docente();
}
function botonModificarDocente2() {
  docente.textContent = materia2.Modificar_Docente();
}
function botonModificarDocente3() {
  docente.textContent = materia3.Modificar_Docente();
}
function botonModificarDocente4() {
  docente.textContent = materia4.Modificar_Docente();
}
function botonModificarDocente5() {
  docente.textContent = materia5.Modificar_Docente();
}
function botonModificarDocente6() {
  docente.textContent = materia6.Modificar_Docente();
}

//FUNCION MOIFICAR HORARIO
function botonModificarHorario1() {
  horario.textContent = materia1.Modificar_Horario();
}
function botonModificarHorario2() {
  horario.textContent = materia2.Modificar_Horario();
}
function botonModificarHorario3() {
  horario.textContent = materia3.Modificar_Horario();
}
function botonModificarHorario4() {
  horario.textContent = materia4.Modificar_Horario();
}
function botonModificarHorario5() {
  horario.textContent = materia5.Modificar_Horario();
}
function botonModificarHorario6() {
  horario.textContent = materia6.Modificar_Horario();
}

//FUNCION MODIFICAR AULA
function botonModificarAula1() {
  aula.textContent = materia1.Modificar_Aula();
}
function botonModificarAula2() {
  aula.textContent = materia2.Modificar_Aula();
}
function botonModificarAula3() {
  aula.textContent = materia3.Modificar_Aula();
}
function botonModificarAula4() {
  aula.textContent = materia4.Modificar_Aula();
}
function botonModificarAula5() {
  aula.textContent = materia5.Modificar_Aula();
}
function botonModificarAula6() {
  aula.textContent = materia6.Modificar_Aula();
}

//FUNCION MODIFICAR PRERREQUISITO
function botonModificarPrerrequisito1() {
  prerrequisito.textContent = materia1.Modificar_Prerrequisito();
}
function botonModificarPrerrequisito2() {
  prerrequisito.textContent = materia2.Modificar_Prerrequisito();
}
function botonModificarPrerrequisito3() {
  prerrequisito.textContent = materia3.Modificar_Prerrequisito();
}
function botonModificarPrerrequisito4() {
  prerrequisito.textContent = materia4.Modificar_Prerrequisito();
}
function botonModificarPrerrequisito5() {
  prerrequisito.textContent = materia5.Modificar_Prerrequisito();
}
function botonModificarPrerrequisito6() {
  prerrequisito.textContent = materia6.Modificar_Prerrequisito();
}

//FUNCION MODIFICAR CARRERA
function botonModificarCarrera1() {
  carrera.textContent = materia1.Modificar_Carrera();
}
function botonModificarCarrera2() {
  carrera.textContent = materia2.Modificar_Carrera();
}
function botonModificarCarrera3() {
  carrera.textContent = materia3.Modificar_Carrera();
}
function botonModificarCarrera4() {
  carrera.textContent = materia4.Modificar_Carrera();
}
function botonModificarCarrera5() {
  carrera.textContent = materia5.Modificar_Carrera();
}
function botonModificarCarrera6() {
  carrera.textContent = materia6.Modificar_Carrera();
}

//FUNCION MODIFICAR UNIVERSIDAD
function botonModificarUniversidad1() {
  universidad.textContent = materia1.Modificar_Universidad();
}
function botonModificarUniversidad2() {
  universidad.textContent = materia2.Modificar_Universidad();
}
function botonModificarUniversidad3() {
  universidad.textContent = materia3.Modificar_Universidad();
}
function botonModificarUniversidad4() {
  universidad.textContent = materia4.Modificar_Universidad();
}
function botonModificarUniversidad5() {
  universidad.textContent = materia5.Modificar_Universidad();
}
function botonModificarUniversidad6() {
  universidad.textContent = materia6.Modificar_Universidad();
}

//FUNCION MODIFICAR CANTIDAD DE INSCRITOS
function botonModificarCantidadInscritos1() {
  cantidadinscritos.textContent = materia1.Modificar_CantidadDeInscritos();
}
function botonModificarCantidadInscritos2() {
  cantidadinscritos.textContent = materia2.Modificar_CantidadDeInscritos();
}
function botonModificarCantidadInscritos3() {
  cantidadinscritos.textContent = materia3.Modificar_CantidadDeInscritos();
}
function botonModificarCantidadInscritos4() {
  cantidadinscritos.textContent = materia4.Modificar_CantidadDeInscritos();
}
function botonModificarCantidadInscritos5() {
  cantidadinscritos.textContent = materia5.Modificar_CantidadDeInscritos();
}
function botonModificarCantidadInscritos6() {
  cantidadinscritos.textContent = materia6.Modificar_CantidadDeInscritos();
}

//FUNCION ELIMINAR NOMBRE
function botonEliminarNombreMateria() {
  nombremateria.textContent = materia1.Eliminar_Asignatura();
  nombremateria.textContent = materia2.Eliminar_Asignatura();
  nombremateria.textContent = materia3.Eliminar_Asignatura();
  nombremateria.textContent = materia4.Eliminar_Asignatura();
  nombremateria.textContent = materia5.Eliminar_Asignatura();
  nombremateria.textContent = materia6.Eliminar_Asignatura();
}

//FUNCION ELIMINAR SIGLA
function botonEliminarSiglas() {
  sigla.textContent = materia1.Eliminar_Siglas();
  sigla.textContent = materia2.Eliminar_Siglas();
  sigla.textContent = materia3.Eliminar_Siglas();
  sigla.textContent = materia4.Eliminar_Siglas();
  sigla.textContent = materia5.Eliminar_Siglas();
  sigla.textContent = materia6.Eliminar_Siglas();
}

//FUNCION ELIMINAR DOCENTE
function botonEliminarDocente() {
  docente.textContent = materia1.Eliminar_Docente();
  docente.textContent = materia2.Eliminar_Docente();
  docente.textContent = materia3.Eliminar_Docente();
  docente.textContent = materia4.Eliminar_Docente();
  docente.textContent = materia5.Eliminar_Docente();
  docente.textContent = materia6.Eliminar_Docente();
}

//FUNCION ELIMINAR HORARIO
function botonEliminarHorario() {
  horario.textContent = materia1.Eliminar_Horario();
  horario.textContent = materia2.Eliminar_Horario();
  horario.textContent = materia3.Eliminar_Horario();
  horario.textContent = materia4.Eliminar_Horario();
  horario.textContent = materia5.Eliminar_Horario();
  horario.textContent = materia6.Eliminar_Horario();
}

//FUNCION ELIMINAR AULA 
function botonEliminararAula() {
  aula.textContent = materia1.Eliminar_Aula();
  aula.textContent = materia2.Eliminar_Aula();
  aula.textContent = materia3.Eliminar_Aula();
  aula.textContent = materia4.Eliminar_Aula();
  aula.textContent = materia5.Eliminar_Aula();
  aula.textContent = materia6.Eliminar_Aula();
}

//FUNCION ELIMINAR PRERREQUISITO
function botonEliminarPrerrequisito() {
  prerrequisito.textContent = materia1.Eliminar_Prerrequisito();
  prerrequisito.textContent = materia2.Eliminar_Prerrequisito();
  prerrequisito.textContent = materia3.Eliminar_Prerrequisito();
  prerrequisito.textContent = materia4.Eliminar_Prerrequisito();
  prerrequisito.textContent = materia5.Eliminar_Prerrequisito();
  prerrequisito.textContent = materia6.Eliminar_Prerrequisito();
}

//FUNCION ELIMINAR CARRERA
function botonEliminarCarrera() {
  carrera.textContent = materia1.Eliminar_Carrera();
  carrera.textContent = materia2.Eliminar_Carrera();
  carrera.textContent = materia3.Eliminar_Carrera();
  carrera.textContent = materia4.Eliminar_Carrera();
  carrera.textContent = materia5.Eliminar_Carrera();
  carrera.textContent = materia6.Eliminar_Carrera();
}

//FUNCION ELIMINAR UNIVERSIDAD
function botonEliminarUniversidad() {
  universidad.textContent = materia1.Eliminar_Universidad();
  universidad.textContent = materia2.Eliminar_Universidad();
  universidad.textContent = materia3.Eliminar_Universidad();
  universidad.textContent = materia4.Eliminar_Universidad();
  universidad.textContent = materia5.Eliminar_Universidad();
  universidad.textContent = materia6.Eliminar_Universidad();
}

//FUNCION ELIMINAR CANTIDAD DE INSCRITOS
function botonEliminarCantidadInscritos() {
  cantidadinscritos.textContent = materia1.Eliminar_CantidadInscritos();
  cantidadinscritos.textContent = materia2.Eliminar_CantidadInscritos();
  cantidadinscritos.textContent = materia3.Eliminar_CantidadInscritos();
  cantidadinscritos.textContent = materia4.Eliminar_CantidadInscritos();
  cantidadinscritos.textContent = materia5.Eliminar_CantidadInscritos();
  cantidadinscritos.textContent = materia6.Eliminar_CantidadInscritos();
}