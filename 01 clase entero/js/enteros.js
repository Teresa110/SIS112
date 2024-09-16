class Entero {
    // Atributos
    Num;
    // Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }
    // CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }
    // CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }
    // CLASS - Mostrar el valor de Num
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
        return this.Num % 2 === 0;
    }

    esNegativoPositivo(){
        return this.Num >= 0;
    }

    factorial() {
        if (this.Num < 0) {
            return "No existe factorial de números negativos";
        }
        let resultado = 1;
        for (let i = 1; i <= this.Num; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // Nuevo método para verificar si es un número perfecto
    esPerfecto() {
        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num;
    }

    // Nuevo método para verificar si el número es primo
    esPrimo() {
        if (this.Num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.Num); i++) {
            if (this.Num % i === 0) return false;
        }
        return true;
    }

    // Nuevo método para obtener la serie de Fibonacci hasta el primer número mayor que el número actual
    fibonacci() {
        const serie = [0, 1];
        let siguiente = serie[0] + serie[1];
        
        // Generar la serie hasta el primer número mayor que el número actual
        while (siguiente <= this.Num) {
            serie.push(siguiente);
            siguiente = serie[serie.length - 1] + serie[serie.length - 2];
        }

        // Añadir el siguiente número mayor que el número actual
        serie.push(siguiente);

        return serie.join(', ');
    }
}

// Las funciones = button HTML
var ClaseEntero = new Entero(0); // Se inicializa en 0

// Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}
// Mostrar el valor de Num en HTML
function mostrarNum(){
    ClaseEntero.showNum();
}
// Incrementar el valor de Num
function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}
// Decrementar el valor de Num
function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}
// Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par" : "Es Num Impar";
    ClaseEntero.showResultado(resp);
}
function esNegativoPositivoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es Num positivo" : "Es Num negativo";
    ClaseEntero.showResultado(resp);
}
// Calcular y mostrar el factorial del número
function calcularFactorial() {
    var resultado = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial: " + resultado);
}
// Verificar si es un número perfecto
function verificarPerfecto() {
    var resultado = ClaseEntero.esPerfecto();
    var resp = resultado ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}
// Verificar si es primo
function verificarPrimo() {
    var resultado = ClaseEntero.esPrimo();
    var resp = resultado ? "Es un número primo" : "No es un número primo";
    ClaseEntero.showResultado(resp);
}
// Mostrar la serie de Fibonacci hasta el número actual
function mostrarFibonacci() {
    var resultado = ClaseEntero.fibonacci();
    ClaseEntero.showResultado("Serie de Fibonacci: " + resultado);
}
