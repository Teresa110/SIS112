class Entero {
    //Atributos
    Num;

    //Constructor
    constructor(Numero){
        this.Num = Numero;
    }

    //CLASS cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }
    //CLASS  Obtener el valor de Num
    getNum(){
       return this.Num;
    }
    //CLASS Modificar el valor de Num
    showResultado(respuesta){
        const resultadoDiv = document.getElementById ('resultado');
        resultadoDiv.textContent = respuesta;
    }
    incrementarNum(){
        this.Num = this.Num +1
    }
    decrementarNum(){
        this.Num = this.Num - 1
    }


    esParImpar(){
        if(this.Num %2 ==0){
            return true;
        } else{
            return false;
        }
    }

    esNegativoPositivo(){
        if(this.Num >0 ){
            return true;
        } else{
            return false;
        }
    }
    

}
//Las funciones = button HTML
var ClaseEntero = new Entero(0);

//Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum(){
    ClaseEntero.showNum();
}

//Incrementare el valor de Num
function IncrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}
function DecrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par": "Es num impar";
    ClaseEntero.showResultado(resp);

}
function esNegativoPositivoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es Num positivo": "Es num negativo";
    ClaseEntero.showResultado(resp);

}

