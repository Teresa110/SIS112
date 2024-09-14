class Entero {
    //Atributos
    Num;
    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }
    //CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
         
        this.Num = parseInt(input.value, 10);
    }
    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }
    //CLASS - Mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }
    
    esParImpar(){
        return (this.Num % 2 == 0)
    }
    esNegativoPositivo(){
        if(this.Num >= 0 ){
            return true;
        } else{
            return false;
        }
    }
    calcularfactorial(){
        let num = parseInt()

    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    if (num < 0) {
        alert("No existe factorial para números negativos.");
    } else if (num === 0 || num === 1) {
        alert("El factorial de " + num + " es 1.");
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        alert("El factorial de " + num + " es " + result + ".");
    }
}



    }



//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}
//Mostrar el valor de Num en HTML
function mostrarNum(){
    ClaseEntero.showNum();
}
//Incrementar el valor de Num
function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}
//Decrementar el valor de Num
function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}
//Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar";
    ClaseEntero.showResultado(resp);
}
//Verficar si es Negativo o Positivo
function esNegativoPositivoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es Num positivo": "Es num negativo";
    ClaseEntero.showResultado(resp);

}
function calcularFactorial() {
    

}
