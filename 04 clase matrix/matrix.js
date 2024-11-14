class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }
/*
    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = Math.floor(numeroRandom * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    //Primera fila con 2, el resto con 0
    llenarMatrizPrimeraFila(){
        for(let i = 0; i < this.filas; i++){

            for(let j = 0; j < this.columnas; j++){
                if (i == 0) {

                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }

                    

            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizPrimeraColumna(){
        for(let i = 0; i < this.filas; i++){

            for(let j = 0; j < this.columnas; j++){
                if (j  == 0) {

                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }

                    

            }
        }
        this.dibujarMatriz();

    }

    llenarMatrizDiagonalalreves(){
        for (let i = 0; i < this.filas; i++) {
    // Recorremos cada columna de la matriz
    for (let j = 0; j < this.columnas; j++) {
        // Si la suma de la posición de la fila (i) y la columna (j) es igual
        // al índice de la última columna, estamos en la diagonal inversa.
        if (i + j === this.columnas - 1) {
            this.matriz[i][j] = 1;
        } else {
            // Si no estamos en la diagonal inversa, asignamos 0.
            this.matriz[i][j] = 0;
        }
    }
}
// Después de llenar la matriz con el patrón en diagonal inversa, la dibujamos
this.dibujarMatriz();
        

    }

    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    //Ejemplo 4 

    llenarMatrizSegundoBorde() {
        // Limpiar la matriz y asignar 0 a todas las posiciones
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        }
        
        // Llenar el segundo borde usando cuatro condiciones independientes
        
        // Segunda fila
        if (this.filas > 2) {
            for (let j = 1; j < this.columnas - 1; j++) {
                this.matriz[1][j] = 2;
            }
        }
        
        // Penúltima fila
        if (this.filas > 3) {
            for (let j = 1; j < this.columnas - 1; j++) {
                this.matriz[this.filas - 2][j] = 2;
            }
        }
        
        // Segunda columna
        if (this.columnas > 2) {
            for (let i = 1; i < this.filas - 1; i++) {
                this.matriz[i][1] = 2;
            }
        }
        
        // Penúltima columna
        if (this.columnas > 3) {
            for (let i = 1; i < this.filas - 1; i++) {
                this.matriz[i][this.columnas - 2] = 2;
            }
        }
        
        // Dibujar la matriz con el segundo borde
        this.dibujarMatriz();
    }
    //Ejemplo 5

    llenarMatrizPiramide() {
        const centro = Math.floor(this.columnas / 2);  // Calcula el centro de la matriz
        
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < centro) { // Limita el número de filas de la pirámide
                    if (j >= centro - i) { // Lado izquierdo de la pirámide
                        if (j <= centro + i) { // Lado derecho de la pirámide
                            this.matriz[i][j] = 2;
                        } else {
                            this.matriz[i][j] = 0;
                        }
                    } else {
                        this.matriz[i][j] = 0;
                    }
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        
        this.dibujarMatriz();
    }
    //ejemplo 6

    llenarMatrizEnCruzConBordes() {
        const centroFila = Math.floor(this.filas / 2);  // Calcula la fila central
        const centroColumna = Math.floor(this.columnas / 2); // Calcula la columna central
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Verificar si estamos en los bordes
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;  // Borde
                }
                // Verificar si estamos en las filas o columnas que forman la cruz (con una fila y columna más)
                else if (i === centroFila || j === centroColumna || i === centroFila -1 || j === centroColumna -1) {
                    this.matriz[i][j] = 1;  // Parte de la cruz
                }
                // Dejar en blanco los cuadrantes
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejemplo 7 
    llenarMatrizSecuencia1() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3 // Pintar la fila con el color asignado
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejemplo 8
    llenarMatrizSecuencia2() {
        this.vaciarMatriz();
        for (let i = 0; i < this.columnas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = j % 3 // Pintar la fila con el color asignado
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejemplo 9
    llenarMatrizSecuencia_0_al_7(){
        this.vaciarMatriz();
        var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero; // Pintar la fila con el color asignado
                if (puntero ==7){
                    puntero = -1;
                }

                puntero = puntero + 1;
            }
        }
    
        this.dibujarMatriz();
    }

    /////Ejemplo 10
    llenarMatrizSecuencia_0_al_7columnas() {
        this.vaciarMatriz();
        let puntero = 0;
    
        for (let j = 0; j < this.columnas; j++) {    // Recorre cada columna
            for (let i = 0; i < this.filas; i++) {   // Recorre cada fila dentro de la columna
                this.matriz[i][j] = puntero;
    
                puntero += 1;
                if (puntero > 7) { // Reinicia el puntero después de 7
                    puntero = 0;
                }
            }
        }
        
        this.dibujarMatriz();
    }
    
    //Ejemplo 11
    llenarMatrizSecuencia3(){
        this.vaciarMatriz();
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero; // Pintar la fila con el color asignado
                if (puntero ==0){
                    puntero = 8;
                }

                puntero = puntero - 1;
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejemplo 12
    llenarMatrizSecuencia4() {
        this.vaciarMatriz();
        var intercambio = "disminuir";
        var puntero = 7;
        
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                //////////////////////////////////////////////////////////////////////////
    
                // Controlar el cambio de dirección en la secuencia
                if (intercambio == "disminuir") {
                    if(puntero == 0 ){
                        intercambio = "incrementar"
                    }

                    puntero = puntero -1;

                }
                ////////////////////////////////////////////////////////////////////////
                if (intercambio == "incrementar") {
                    if(puntero == 7 ){
                        puntero = puntero -1;
                        intercambio = "disminuir"
                    }

                    puntero = puntero + 1;

                }

            }
        }

       
        
        this.dibujarMatriz();
    }
*/
    //Ejemplo 13
    
    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    //Ejemplo Tarea 1
    cuadradorelleno() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;  // Asignar 1 a cada posición en la matriz
            }
        }
        this.dibujarMatriz();
    }

    //Ejemplo Tarea 2
    rellenarMatrizConMarcoInterno() {
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            // Si estamos en el borde de la matriz, asignar 0
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 0;
            } else {
                // Interior de la matriz, asignar 1
                this.matriz[i][j] = 1;
            }
        }
    }
    this.dibujarMatriz();
}

    //Ejemplo Tarea 3
    rellenarMatrizConCruz() {
        // Calcular las posiciones de la fila y columna centrales
        const filaCentral = Math.floor(this.filas / 2);
        const columnaCentral = Math.floor(this.columnas / 2);
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la fila o columna central, asignar 1
                if (i === filaCentral -1 || j === columnaCentral-1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Resto de la matriz, asignar 0
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    /////77/7/7/////Ejemplo Tarea 4
    rellenarMatrizConBordesYDiagonales() {
        for (let i = 0; i < this.filas - 1; i++) { // Recorremos todas las filas excepto la última
            for (let j = 0; j < this.columnas; j++) {
                // Rellenar los bordes exteriores con `1`s
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Rellenar las diagonales principales con `2`s, excepto las esquinas del segundo borde interior y las posiciones específicas
                else if ((i === j || i === this.columnas - j - 1) && 
                         !(i === 1 && (j === 1 || j === this.columnas - 2)) && 
                         !(i === this.filas - 2 && (j === 1 || j === this.columnas - 2)) && 
                         !(i === 4 && j === 5) &&  // Eliminar el `2` en la fila 5, columna 6
                         !(i === 5 && j === 5)) {  // Eliminar el `2` en la fila 6, columna 6
                    this.matriz[i][j] = 2;
                }
                // Añadir un `1` en el lado derecho en la 5ta fila
                else if (i === 4 && j === this.columnas - 2) {
                    this.matriz[i][j] = 1;
                }
                // Rellenar toda la columna 6 (índice 5) con `0`s, excepto en los bordes
                else if (j === 5 && (i !== 0 && i !== this.filas - 1)) {  // Excluye los bordes
                    this.matriz[i][j] = 0;
                }
                // Rellenar el segundo borde interior con `0`s
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0;
                }
                // Dejar el resto de la matriz en `0`s
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Añadir un `1` en la fila 9 (índice 8) en el borde de la matriz
        for (let j = 0; j < this.columnas; j++) {
            if (j === 0 || j === this.columnas - 1) { // Borde izquierdo y derecho
                this.matriz[8][j] = 1;
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 6 tarea
    rellenarMatrizAlterna() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alternar entre 1 y 0 en cada fila
                if (i % 2 === 0) {
                    // Filas pares (0, 2, 4, ...) llenas con 1
                    this.matriz[i][j] = 1;
                } else {
                    // Filas impares (1, 3, 5, ...) llenas con 0
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    //Ejercicio 7 tarea
    rellenarMatrizZigZagHorizontalDerecha() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Crear el zig-zag moviéndose desde el lado derecho hacia la izquierda
                if (j === i) {
                    this.matriz[i][j] = 1;  // Coloca un `1` en la posición de la "escalera"
                } else {
                    this.matriz[i][j] = 0;  // Rellena el resto con `0`s
                }
            }
        }
        this.dibujarMatriz();
    }
    /////////////////////////////////////////////////////////////Ejercicio 8 tarea
    rellenarMatrizEspiral() {
        let top = 0;
        let bottom = this.filas - 1;
        let left = 0;
        let right = this.columnas - 1;
        let value = 1;  // Para colocar los 1's
    
        while (top <= bottom && left <= right) {
            // Rellenar la fila superior (de izquierda a derecha)
            for (let i = left; i <= right; i++) {
                this.matriz[top][i] = value;
            }
            top++;
    
            // Rellenar la columna derecha (de arriba a abajo)
            for (let i = top; i <= bottom; i++) {
                this.matriz[i][right] = value;
            }
            right--;
    
            // Rellenar la fila inferior (de derecha a izquierda)
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    this.matriz[bottom][i] = value;
                }
                bottom--;
            }
    
            // Rellenar la columna izquierda (de abajo hacia arriba)
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    this.matriz[i][left] = value;
                }
                left++;
            }
        }
    
        // Establecer los valores internos en 0 (lo que no es parte de la espiral)
        for (let i = 1; i < this.filas - 1; i++) {
            for (let j = 1; j < this.columnas - 1; j++) {
                if (this.matriz[i][j] !== 1) {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 9 tarea
    rellenarMatrizTrianguloSuperiorIzquierdo() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1;  // Colocar los 1's en la parte superior izquierda
            }
        }
    
        // Establecer el resto de la matriz en 0
        for (let i = 0; i < this.filas; i++) {
            for (let j = i + 1; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 10 tarea
    rellenarMatrizTrianguloInferiorDerecho() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - 1; j >= this.columnas - 1 - i; j--) {
                this.matriz[i][j] = 1;  // Colocar los 1's en la parte inferior derecha
            }
        }
    
        // Establecer el resto de la matriz en 0
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas - 1 - i; j++) {
                this.matriz[i][j] = 0;
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 11 tarea
    rellenarMatrizCuadricula() {
        for (let i = 0; i < this.filas - 1; i++) {  // Evitar la última fila
            if (i % 2 === 0) {
                // Fila completa de 1's
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = 1;
                }
            } else {
                // Fila con 1's al principio y al final
                this.matriz[i][0] = 1;  // Primer 1
                for (let j = 1; j < this.columnas - 1; j++) {
                    this.matriz[i][j] = 0;  // Rellenar con 0's en el medio
                }
                this.matriz[i][this.columnas - 1] = 1;  // Último 1
            }
        }
    
        // Rellenar la última fila completamente con 0's
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[this.filas - 1][j] = 0;
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 12 tarea 
    rellenarMatrizTrianguloCentral() {
        this.vaciarMatriz();
        let mid = Math.floor(this.filas / 2);  // Encuentra la fila central
    
        // Rellenamos las filas para la pirámide, máximo 5 filas
        for (let i = 1; i <= 5; i++) {
            let start = mid - i + 1;  // Empieza a formar la pirámide desde el centro
            let end = mid + i - 1;    // Expande hacia los bordes
    
            // Rellenar con 1's entre el rango de start y end en la fila i
            for (let j = start; j <= end; j++) {
                this.matriz[i][j] = 1;
            }
        }
    
        this.dibujarMatriz();
    }
    //Ejercicio 13 tarea
    rellenarMatrizRombosConcentricos() {
        // Rellenamos las filas de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Definir cuántos 1's va a tener cada fila según el patrón
            let numUnos;
            
            // Patrones de 1's según la fila
            if (i === 0 || i === 9) {
                numUnos = 1;  // Primera y última fila tienen un solo 1
            } else if (i === 1 || i === 8) {
                numUnos = 5;  // Segunda y penúltima fila tienen cinco 1's
            } else if (i === 2 || i === 7) {
                numUnos = 7;  // Tercera y antepenúltima fila tienen siete 1's
            } else if (i === 3 || i === 6) {
                numUnos = 9;  // Cuarta y séptima fila tienen nueve 1's
            } else if (i === 4 || i === 5) {
                numUnos = 10; // Quinta y sexta fila tienen diez 1's
            }
    
            // Colocamos los 1's en la matriz según el número de unos para cada fila
            for (let j = 0; j < this.columnas; j++) {
                // Llenamos el centro de la fila con 1's según el patrón
                if (j >= Math.floor((this.columnas - numUnos) / 2) && j < Math.floor((this.columnas + numUnos) / 2)) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
    
            // Ajuste para el lado izquierdo (4 a 7 filas)
            if (i >= 4 && i <= 7) {
                this.matriz[i][0] = 1; // Coloca un 1 en el lado izquierdo
            }
    
            // Ajuste para el lado derecho (3 a 6 filas)
            if (i >= 3 && i <= 6) {
                this.matriz[i][this.columnas - 1] = 1; // Coloca un 1 en el lado derecho
            }
        }
    
        // Dibujar la matriz
        this.dibujarMatriz();
    }
    
    
    
    
    
    
    
    
    
    
    
    


    

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
                

            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    
    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }
    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }
    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }
    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }
    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }



}