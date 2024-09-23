class Entero {
    // Atributos
    Num;

    // Constructor
    constructor(Numero){
        this.Num = Numero;
    }

    // CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numberInput');
        this.Num = parseInt(input.value, 10);
    }

    // CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    // CLASS - Mostrar el valor de Num
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    // Obtener el valor de Num y mostrarlo
    showResultado(respuesta) {
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

    factorial(){
        if(this.Num < 0) {
            return "No existe factorial de números negativos";
        }
        let resultado = 1;
        for (let i = 1; i <= this.Num; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // VERIFICAR SI ES PERFECTO
    esPerfecto(){
        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num;
    }

    // VERIFICAR SI ES PRIMO
    esPrimo() {
        if (this.Num <= 1) return false; 
        if (this.Num === 2) return true; 
        if (this.Num % 2 === 0) return false; 
        
        for (let i = 3; i <= Math.sqrt(this.Num); i += 2) {
            if (this.Num % i === 0) return false;
        }
        return true;
    }

    // CALCULAR SUCESIÓN DE FIBONACCI
    fibonacci() {
        if (this.Num <= 0) return "Número debe ser positivo";

        let serie = [];
        let a = 0;
        let b = 1;

        for (let i = 0; i < this.Num; i++) {
            serie.push(a);
            let temp = a + b;
            a = b;
            b = temp;
        }

        return serie.join(', ');
    }

    esArmstrong() {
        let numStr = this.Num.toString();  // Convertimos el número a cadena
        let numLength = numStr.length;  // Obtenemos el número de dígitos
        let suma = 0;
        // Sumamos los cubos de los dígitos
        for (let i = 0; i < numLength; i++) {
            suma += Math.pow(parseInt(numStr[i]), 3);
        }
        // Comparamos si la suma de los cubos es igual al número original
        return suma === this.Num;
    }

    esPerfectoGeneralizado(k) {
        let suma = 0;
        // Recorremos los divisores propios del número
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                // Sumamos la k-ésima potencia de los divisores propios
                suma += Math.pow(i, k);
            }
        }
        // Comparamos la suma con la k-ésima potencia del número original
        return suma === Math.pow(this.Num, k);
    }

    calcularFilaPascal() {
        let fila = [1]; // La primera posición siempre es 1
        for (let i = 1; i <= this.Num; i++) {
            fila[i] = fila[i - 1] * (this.Num - i + 1) / i;
        }
        return fila;
    }

    cifrarCesar(desplazamiento) {
        let resultado = '';
        let texto = this.Num.toString(); // Convertir el número a cadena de texto si es un número
        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];
            if (char.match(/[a-z]/i)) { // Verifica si el carácter es una letra
                let codigo = char.charCodeAt(0);
                // Manejo de mayúsculas
                if (codigo >= 65 && codigo <= 90) {
                    char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
                }
                // Manejo de minúsculas
                else if (codigo >= 97 && codigo <= 122) {
                    char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
                }
            }
            resultado += char; // Añade el carácter cifrado al resultado
        }
        return resultado;
    }
    


    tienePrimoGemelo() {
        // Función auxiliar para verificar si un número es primo
        const esPrimo = (num) => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
        // Verificar si N tiene un primo gemelo
        if (esPrimo(this.Num)) {
            // Verificar si N-2 o N+2 también son primos
            return esPrimo(this.Num - 2) || esPrimo(this.Num + 2);
        }
        return false;
    }

    descomponerEnFactoresPrimos() {
        let num = this.Num;
        let factores = [];
        // Encontrar el número de veces que 2 divide a num
        let potencia = 0;
        while (num % 2 === 0) {
            num /= 2;
            potencia++;
        }
        if (potencia > 0) factores.push([2, potencia]); // Añadir el factor 2 con su potencia
        // Encontrar otros factores primos impares
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            potencia = 0;
            while (num % i === 0) {
                num /= i;
                potencia++;
            }
            if (potencia > 0) factores.push([i, potencia]); // Añadir el factor primo con su potencia
        }
        // Si num es mayor que 2, es un factor primo restante
        if (num > 2) factores.push([num, 1]);
    
        return factores;
    }

    calcularCatalan() {
        // Función auxiliar para calcular el factorial
        const factorial = (num) => {
            let resultado = 1;
            for (let i = 1; i <= num; i++) {
                resultado *= i;
            }
            return resultado;
        };
        // Fórmula de los números de Catalan: C(n) = (2n)! / ((n+1)! * n!)
        let n = this.Num;
        let catalan = factorial(2 * n) / (factorial(n + 1) * factorial(n));
        
        return catalan;
    }
    esMersenne() {
        let num = this.Num;
        // Comprobamos si num + 1 es una potencia de 2
        let p = Math.log2(num + 1); 
        if (p % 1 !== 0) return false; // Si p no es entero, no es de Mersenne
        // Verificamos si p es primo
        return this.esPrimo(p); // Usamos la función de primo existente
    }

}

// Las funciones = button HTML
var ClaseEntero = new Entero(0); // Se inicializa en 0

// Crear Objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

// Incrementar el valor de Num
function IncrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

// Decrementar el valor de Num
function DecrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

// Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es un número par" : "Es un número impar";
    ClaseEntero.showResultado(resp);
}

function esPositivoNegativoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es un número positivo" : "Es un número negativo";
    ClaseEntero.showResultado(resp);
}

// Mostrar el factorial
function CalcularFactorial(){
    var resultado = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial: " + resultado);
}

// Verifica si es número perfecto
function verificarPerfecto(){
    var resultado = ClaseEntero.esPerfecto();
    var resp = resultado ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}

function verificarPrimo(){
    var resultado = ClaseEntero.esPrimo();
    var resp = resultado ? "Es un número primo" : "No es un número primo";
    ClaseEntero.showResultado(resp);
}

function mostrarFibonacci() {
    var resultado = ClaseEntero.fibonacci();
    ClaseEntero.showResultado("Serie de Fibonacci: " + resultado);
}
function esArmstrongNum(){
    var respuesta = ClaseEntero.esArmstrong();
    var resp = respuesta ? "Es Num Armstrong" : "No es Num Armstrong";
    ClaseEntero.showResultado(resp);
}
function esPerfectoGeneralizadoNum() {
    const k = parseInt(document.getElementById('kInput').value, 10);
    var respuesta = ClaseEntero.esPerfectoGeneralizado(k);
    
    // Usa comillas y el operador de concatenación correctamente
    var resp = respuesta 
        ? `Es Num perfecto generalizado con k=${k}` 
        : `No es Num perfecto generalizado con k=${k}`;
    
    ClaseEntero.showResultado(resp);
}


function calcularFilaPascalNum() {
    var respuesta = ClaseEntero.calcularFilaPascal();
    ClaseEntero.showResultado("Fila de Pascal: " + respuesta.join(", "));
}

function cifrarCesarNum() {
    var desplazamiento = parseInt(prompt("Ingresa el valor del desplazamiento:"));
    var texto = prompt("Ingresa el texto a cifrar:");
    ClaseEntero.Num = texto; // Asigna el texto ingresado a la propiedad Num
    var respuesta = ClaseEntero.cifrarCesar(desplazamiento);
    ClaseEntero.showResultado("Cifrado César: " + respuesta);
}


function tienePrimoGemeloNum() {
    var respuesta = ClaseEntero.tienePrimoGemelo();
    var resp = respuesta ? "Tiene un primo gemelo" : "No tiene primo gemelo";
    ClaseEntero.showResultado(resp);
}

function descomponerEnFactoresPrimosNum() {
    var respuesta = ClaseEntero.descomponerEnFactoresPrimos();
    var resultadoFormateado = respuesta.map(f => f[0] + "^" + f[1]).join(", ");
    ClaseEntero.showResultado("Factores primos: " + resultadoFormateado);
}

function calcularCatalanNum() {
    var respuesta = ClaseEntero.calcularCatalan();
    ClaseEntero.showResultado("Número de Catalan: " + respuesta);
}

function esMersenneNum() {
    var respuesta = ClaseEntero.esMersenne();
    var resp = respuesta ? "Es un número de Mersenne" : "No es un número de Mersenne";
    ClaseEntero.showResultado(resp);
}