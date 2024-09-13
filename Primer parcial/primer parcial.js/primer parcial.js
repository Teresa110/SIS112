class Materias {
  constructor(nombremateria, sigla, docente, horario, aula, prerrequisito, carrera, universidad, cantidadinscritos, modalidad, calificacion, temas, ubicacion) {
    this.nombremateria = nombremateria;
    this.sigla = sigla;
    this.docente = docente;
    this.horario = horario;
    this.aula = aula;
    this.prerrequisito = prerrequisito;
    this.carrera = carrera;
    this.universidad = universidad;
    this.cantidadinscritos = cantidadinscritos
    this.modalidad = modalidad
    this.calificacion = calificacion
    this.temas = temas
    this.ubicacion = ubicacion
  }

  Asignatura() {
    return 'Materia:' + this.nombremateria;
  }

  siglas() {
    return 'Sigla ' + this.sigla;
  }

  Docente() {
    return 'Docente ' + this.docente;
  }
 
  Horario() {
      return 'Horario ' + this.horario;
    }

  Aula(){
      return 'Aula ' + this.aula;
  }

  Prerrequisito(){
      return 'Prerequisito ' + this.prerrequisito + ' para inscribir esta materia';
  }

  Carrera(){
      return 'Carrera: ' + this.carrera;
  }

  Universidad(){
      return 'Universidad ' + this.universidad;
  }

  CantidadDeInscritos(){
      return 'Cantidad Inscritos ' + this.cantidadinscritos;
  }

  Modalidad(){
    return 'Modalidad ' + this.modalidad;
  }

  Calificacion(){
    return 'Calificacion ' + this.calificacion;
  }

  Temas(){
    return 'Temas: ' + this.temas;
  }

  Ubicacion(){
    return 'Ubicacion ' + this.ubicacion;
  }

  //MODIFICAR ASIGNATURAS 
  Modificar_Asignatura(){
    this.nombremateria = prompt("Ingrese el nombre de la materia porfavor")
    return 'El nombre de esta materia es ' + this.nombremateria;
  }

  //MODIFICAR SIGLAS
  Modificar_Siglas() {
      this.sigla = prompt("Ingrese la sigla de la materia porfavor ")
      return 'La sigla de esta materia es ' + this.sigla;
  }
  
  //MODIFICAR DOCENTE
  Modificar_Docente() {
      this.docente = prompt("Ingrese el nombre del docente porfavor")
      return 'El nombre del docente que da esta materia es ' + this.docente;
  }
  
  //MODIFICAR HORARIO
  Modificar_Horario(){
      this.horario = prompt("Ingrese el horario porfavor ")
      return 'El horario de esta materia es ' + this.horario;
  }

  //MODIFICAR AULA
  Modificar_Aula(){
      this.aula = prompt("Ingrese el aula en que se da esta materia porfavor ")
      return 'El aula donde se da esta materia es ' + this.aula;
  }
  
  //MODIFICAR PRERREQUISITO
  Modificar_Prerrequisito(){
      this.prerequisito = prompt("Ingrese el prerequisito de la materia porfavor ")
      return 'Estoy estudiando en la ' + this.prerrequisito;
  }
  
  //MODIFICAR CARRERA
  Modificar_Carrera(){
      this.carrera = prompt("Ingrese la carrera que estudia porfavor ")
      return 'Esta materia es de la carrera de ' + this.carrera;
  }

  //MODIFICAR UNIVERSIDAD
  Modificar_Universidad(){
      this.universidad = prompt("Ingrese la universidad en la que estudia porfavor ")
      return 'Estoy estudiando en la ' + this.universidad;
  }
  
  //MODIFICAR CANTIDAD DE INSCRITOS
  Modificar_CantidadDeInscritos(){
      this.cantidadinscritos = prompt("Ingrese la cantidad de inscritos porfavor ")
      return 'El numero de inscritos de esta materia es ' + this.cantidadinscritos;
  }

  //MODIFICAR MODALIDAD
  Modificar_Modalidad() {
    let opcionesValidas = ['presencial', 'online', 'hibrido'];
    let inputModalidad;
  
    do {
      inputModalidad = prompt("Ingrese la modalidad de la materia (presencial, online, hibrido)").toLowerCase();
      if (!opcionesValidas.includes(inputModalidad)) {
        alert('Opción inválida. Por favor ingrese una opción válida (presencial, online, hibrido).');
      }
    } while (!opcionesValidas.includes(inputModalidad));
  
    this.modalidad = inputModalidad;
    return 'La modalidad de esta materia es ' + this.modalidad;
  }
  
  //MODIFICAR CALIFICACION 
  Modificar_Calificacion() {
    let inputCalificacion;
  
    do {
      inputCalificacion = prompt("Ingrese la calificación mínima de aprobación (0 a 100)");
      if (isNaN(inputCalificacion) || inputCalificacion < 0 || inputCalificacion > 100) {
        alert('Entrada inválida. Por favor ingrese un número entre 0 y 100.');
      }
    } while (isNaN(inputCalificacion) || inputCalificacion < 0 || inputCalificacion > 100);
  
    this.calificacion = inputCalificacion;
    return 'La calificación mínima de aprobación para esta materia es ' + this.calificacion;
  }
  
  
  //MODIFICAR TEMAS 
  Modificar_Temas(){
    this.temas = prompt("Ingrese porfavor los temas de las maateria ")
    return 'Los temas que se llevan en esta materia son ' + this.temas;
  }

  //MODIFICAR UBICACION
  Modificar_Ubicacion(){
    this.ubicacion = prompt("Ingrese una ubicacion en latitud y lateral porfavor ")
    return 'La ubicacion en latitud y lateral donde se imparte esta materia es ' + this.ubicacion;
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

  Eliminar_Modalidad() {
    return ""
  }

  Elimiar_Calificacion() {
    return ""
  }

  Eliminar_Temas() {
    return ""
  }

  Eliminar_Ubicacion() {
    return ""
  }


}

// Crear una instancia de la clase Materia
const materia1 = new Materias('CALCULO I', 'MAT-132', 'ASPIAZU MELGAR VICTOR HUGO', 'LUNES 07:30 - 09:00, MIERCOLES 07:30 - 09:00', '10 AULA A-N4', 'MAT-030', 'Ingenieria Industrial', 'UCB', '33', 'presencial', '60', 'FUNCIONES, LIMITES, DERIVADAD, INTEGRALES', '-17.695191,-63.1514697');
const materia2 = new Materias('ANTROPOLOGÍA Y VALORES', 'FHC-101', 'DE LA BARRA BARRA EXALTA GABRIELA', 'MARTES 09:10 - 10:40, JUEVES 09:10 - 10:40', 'MARTES 10 AULA A-N4, JUEVES B 2-1', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '62', 'presencial', '60', 'LA BIBLIA, VALORES LA RESPONSABILIDAD SOCIAL', '-17.695191,-63.1514697' );
const materia3 = new Materias('FÍSICA I Y LABORATORIO', 'FIS-111', 'LOBO LIMPIAS VICTOR HUGO', 'LUNES 09:10 - 10:40, MIERCOLES 09:10 - 10:40', 'E 2-5', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '45', 'presencial', '60', 'MAGNITUDES, UNIDADES FISICAS Y VECTORES, CINEMATICA, DINAMICA, FUNDAMENTOS DE ENERGIA', '-17.695191,-63.1514697');
const materia4 = new Materias('MANUFACTURA Y MECANIZADO', 'IND-112', 'SALVATIERRA ARANCIBIA JORGE ENRIQUE', 'MARTES 07:30 - 09:00, JUEVES 07:30 - 09:00, VIERNES 07:30 - 09:00', 'MARTES 12 AULA A-N4, JUEVES F 1-2 (LAB. PROCESOS), VIERNES F 1-2 (LAB. PROCESOS)', 'IND-111', 'Ingenieria Industrial', 'UCB', '14', 'presencial', '60', 'SOLDADURA, MANUFACTURA, FUNDICION', '-17.695191,-63.1514697');
const materia5 = new Materias('PROBABILIDAD Y ESTADÍSTICA I', 'MAT-142', 'BARCA MAGARZO CARMEN SILVIA', 'MARTES 10:50 - 12:20, JUEVES 10:50 - 12:20', 'D 2-1 (LAB. CÓMPUTO 2)', 'NINGUNA', 'Ingenieria Industrial', 'UCB', '33', 'presencial', '60', 'ORGANIZACION DE DATOS', '-17.695191,-63.1514697');
const materia6 = new Materias('PROGRAMACIÓN I', 'SIS-112', 'ESCALANTE USTARIZ EDDY', 'LUNES 10:50 - 12:20, VIERNES 09:10 - 11:35', 'C 2-2 (LAB. CÓMPUTO 5)', 'SIS-111', 'Ingenieria Industrial', 'UCB', '15', 'presencial', '60', 'INTRODUCCION A POO', '-17.695191,-63.1514697');

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
const modalidad = document.getElementById('modalidad')
const calificacion = document.getElementById('calificacion')
const temas = document.getElementById('temas')
const ubicacion = document.getElementById('ubicacion')

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
  modalidad.textContent = materia1.Modalidad();
  calificacion.textContent = materia1.Calificacion();
  temas.textContent = materia1.Temas();
  ubicacion.textContent = materia1.Ubicacion();
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
  modalidad.textContent = materia2.Modalidad();
  calificacion.textContent = materia2.Calificacion();
  temas.textContent = materia2.Temas();
  ubicacion.textContent = materia2.Ubicacion();
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
  modalidad.textContent = materia3.Modalidad();
  calificacion.textContent = materia3.Calificacion();
  temas.textContent = materia3.Temas();
  ubicacion.textContent = materia3.Ubicacion();
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
  modalidad.textContent = materia4.Modalidad();
  calificacion.textContent = materia4.Calificacion();
  temas.textContent = materia4.Temas();
  ubicacion.textContent = materia4.Ubicacion();
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
  modalidad.textContent = materia5.Modalidad();
  calificacion.textContent = materia5.Calificacion();
  temas.textContent = materia5.Temas();
  ubicacion.textContent = materia5.Ubicacion();
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
  modalidad.textContent = materia6.Modalidad();
  calificacion.textContent = materia6.Calificacion();
  temas.textContent = materia6.Temas();
  ubicacion.textContent = materia6.Ubicacion();
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

//FUNCION MODIFICAR MODALIDAD 
function botonModificarModalidad1() {
  modalidad.textContent = materia1.Modificar_Modalidad();
}
function botonModificarModalidad2() {
  modalidad.textContent = materia2.Modificar_Modalidad();
}
function botonModificarModalidad3() {
  modalidad.textContent = materia3.Modificar_Modalidad();
}
function botonModificarModalidad4() {
  modalidad.textContent = materia4.Modificar_Modalidad();
}
function botonModificarModalidad5() {
  modalidad.textContent = materia5.Modificar_Modalidad();
}
function botonModificarModalidad6() {
  modalidad.textContent = materia6.Modificar_Modalidad();
}

//FUNCION MODIFICAR CALIFICACION
function botonModificarCalifiacion1() {
  calificacion.textContent = materia1.Modificar_Calificacion();
}
function botonModificarCalifiacion2() {
  calificacion.textContent = materia2.Modificar_Calificacion();
}
function botonModificarCalifiacion3() {
  calificacion.textContent = materia3.Modificar_Calificacion();
}
function botonModificarCalifiacion4() {
  calificacion.textContent = materia4.Modificar_Calificacion();
}
function botonModificarCalifiacion5() {
  calificacion.textContent = materia5.Modificar_Calificacion();
}
function botonModificarCalifiacion6() {
  calificacion.textContent = materia6.Modificar_Calificacion();
}

//FUNCION MODIFICAR TEMAS
function botonModificarTemas1() {
  temas.textContent = materia1.Modificar_Temas();
}
function botonModificarTemas2() {
  temas.textContent = materia2.Modificar_Temas();
}
function botonModificarTemas3() {
  temas.textContent = materia3.Modificar_Temas();
}
function botonModificarTemas4() {
  temas.textContent = materia4.Modificar_Temas();
}
function botonModificarTemas5() {
  temas.textContent = materia5.Modificar_Temas();
}
function botonModificarTemas6() {
  temas.textContent = materia6.Modificar_Temas();
}

//FUNCION MODIFICAR UBICACION
function botonModificarUbicacion1() {
  ubicacion.textContent = materia1.Modificar_Ubicacion();
}
function botonModificarUbicacion2() {
  ubicacion.textContent = materia2.Modificar_Ubicacion();
}
function botonModificarUbicacion3() {
  ubicacion.textContent = materia3.Modificar_Ubicacion();
}
function botonModificarUbicacion4() {
  ubicacion.textContent = materia4.Modificar_Ubicacion();
}
function botonModificarUbicacion5() {
  ubicacion.textContent = materia5.Modificar_Ubicacion();
}
function botonModificarUbicacion6() {
  ubicacion.textContent = materia6.Modificar_Ubicacion();
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

//FUNCION ELIMINAR MODALIDAD
function botonEliminarModalidad() {
  modalidad.textContent = materia1.Eliminar_Modalidad();
  modalidad.textContent = materia2.Eliminar_Modalidad();
  modalidad.textContent = materia3.Eliminar_Modalidad();
  modalidad.textContent = materia4.Eliminar_Modalidad();
  modalidad.textContent = materia5.Eliminar_Modalidad();
  modalidad.textContent = materia6.Eliminar_Modalidad();
}

//FUNCION ELIMINAR CALIFICACION MINIMA
function botonEliminarCalificacion() {
  calificacion.textContent = materia1.Elimiar_Calificacion();
  calificacion.textContent = materia2.Elimiar_Calificacion();
  calificacion.textContent = materia3.Elimiar_Calificacion();
  calificacion.textContent = materia4.Elimiar_Calificacion();
  calificacion.textContent = materia5.Elimiar_Calificacion();
  calificacion.textContent = materia6.Elimiar_Calificacion();
}

//FUNCION ELIMINAR TEMAS
function botonEliminarTemas() {
  temas.textContent = materia1.Eliminar_Temas();
  temas.textContent = materia2.Eliminar_Temas();
  temas.textContent = materia3.Eliminar_Temas();
  temas.textContent = materia4.Eliminar_Temas();
  temas.textContent = materia5.Eliminar_Temas();
  temas.textContent = materia6.Eliminar_Temas();
}

//FUNCION ELIMINAR UBICACION
function botonEliminarUbicacion() {
  ubicacion.textContent = materia1.Eliminar_Universidad();
  ubicacion.textContent = materia2.Eliminar_Universidad();
  ubicacion.textContent = materia3.Eliminar_Universidad();
  ubicacion.textContent = materia4.Eliminar_Universidad();
  ubicacion.textContent = materia5.Eliminar_Universidad();
  ubicacion.textContent = materia6.Eliminar_Universidad();
}

