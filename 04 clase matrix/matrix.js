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

    //Ejemplo Tarea 4
    rellenarMatrizConBordesYDiagonales() {
        for (let i = 0; i < this.filas; i++) { // Recorremos todas las filas
            for (let j = 0; j < this.columnas; j++) {
                // Rellenar los bordes exteriores con `1`s
                if (i === 0 || i === this.filas - 2 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Rellenar las diagonales principales con `2`s (modificado según tu descripción)
                else if ((i === 2 && j === 2) ||  // Primer "2"
                         (i === 6 && j === 2) ||  // Segundo "2"
                         (i === 3 && j === 3) ||  // Tercer "2"
                         (i === 5 && j === 3) ||  // Cuarto "2"
                         (i === 4 && j === 4) ||  // Quinto "2"
                         (i === 3 && j === 6) ||  // Sexto "2"
                         (i === 5 && j === 6) ||  // Septimo "2"
                         (i === 2 && j === 7) ||  // Octavo "2"
                         (i === 6 && j === 7)) {  // Noveno "2"
                    this.matriz[i][j] = 2;
                }
                // Rellenar el resto con `0`s
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Colocar un único `1` en la fila 5, columna 2 desde la derecha (índice 1 desde el final)
        this.matriz[4][this.columnas - 2] = 1;
    
        // Rellenar la columna 5 desde la derecha (índice 4) con `0`s, excepto en los bordes
        for (let i = 1; i < this.filas - 3; i++) { // Evitamos los bordes superiores e inferiores
            this.matriz[i][this.columnas - 5] = 0;  // Columna 5 desde la derecha
        }
    
        // Línea 10 vacía con `0`s
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[9][j] = 0;
        }
    
        // Llamar al método para dibujar la matriz
        this.dibujarMatriz();
    }
    
    
    
    //Ejercicio 5 tarea
    rellenarMatrizBandera() {
        // Dividimos la matriz en tres partes iguales
        let franja = Math.floor(this.filas / 3);
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < franja) {
                    // Primera franja con 1's
                    this.matriz[i][j] = 1;
                } else if (i < 2 * franja) {
                    // Segunda franja con 2's
                    this.matriz[i][j] = 2;
                } else {
                    // Tercera franja con 0's
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz con el patrón final
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
    rellenarMatrizEnEspiral() {
        // Inicializamos la matriz con todos los valores en 0
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        }
    
        let top = 0, bottom = this.filas - 1, left = 0, right = this.columnas - 1;
        let value = 1;
    
        while (top <= bottom && left <= right) {
            // Rellenamos la fila superior de izquierda a derecha
            for (let i = left; i <= right; i++) {
                this.matriz[top][i] = value;
            }
            top++;
    
            // Rellenamos la columna derecha de arriba a abajo
            for (let i = top; i <= bottom; i++) {
                this.matriz[i][right] = value;
            }
            right--;
    
            // Rellenamos la fila inferior de derecha a izquierda
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    this.matriz[bottom][i] = value;
                }
                bottom--;
            }
    
            // Rellenamos la columna izquierda de abajo hacia arriba
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    this.matriz[i][left] = value;
                }
                left++;
            }
        }
    
        // Llamar al método para dibujar la matriz
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
        // Definir el tamaño de la matriz
        let mid = Math.floor(this.filas / 2);  // Encuentra el centro de la matriz
    
        // Rellenamos las filas de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en el centro o a una distancia adecuada del centro, llenamos con 1
                let dist = Math.abs(mid - i) + Math.abs(mid - j);
                
                if (dist === 4) {  // Crea el rombo exterior
                    this.matriz[i][j] = 1;
                } else if (dist === 3) {  // Crea el siguiente rombo
                    this.matriz[i][j] = 1;
                } else if (dist === 2) {  // Crea el siguiente rombo
                    this.matriz[i][j] = 1;
                } else if (dist === 1) {  // Crea el siguiente rombo
                    this.matriz[i][j] = 1;
                } else if (dist === 0) {  // Crea el centro
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }
    
    //Ejercicio 14 tarea
    rellenarMatrizCrucesConcentricas() {
        // Primero, aseguramos que la matriz esté vacía
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        }
    
        // Definir las posiciones de los 1's para las cruces concéntricas
        const cruzes = [
            [2, 3, 4, 5, 6, 7], // Fila 1: Cruces
            [2, 7],              // Fila 2: Cruces
            [1, 7],              // Fila 3: Cruces
            [0, 7],              // Fila 4: Cruces
            [0, 7],              // Fila 5: Cruces
            [1, 7],              // Fila 6: Cruces
            [2, 7],              // Fila 7: Cruces
            [2, 7]               // Fila 8: Cruces
        ];
    
        // Asignamos los 1's en las posiciones especificadas
        for (let i = 0; i < cruzes.length; i++) {
            for (let j of cruzes[i]) {
                this.matriz[i][j] = 1;
            }
        }
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }
    
    //Ejercicio 15 tarea
    rellenarMatrizBanderaDiagonal() {
        // Recorremos cada fila
        for (let i = 0; i < this.filas; i++) {
            // Colocamos los 1's en las primeras i+1 columnas
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1;
            }
            // El resto de las columnas se dejan en 0
            for (let j = i + 1; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        }
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }

    //Ejercicio 16 tarea
    rellenarMatrizCuadradoDentroDeCuadrado() {
        let mid = Math.floor(this.filas / 2); // Para ubicar el centro de la matriz
    
        // Recorremos todas las filas y columnas de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
    
                // Cuadrado exterior (borde con 1's)
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Cuadrado interior (borde con 2's)
                else if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                    // Reemplazamos las esquinas interiores con 0
                    if ((i === 2 && j === 2) || (i === 2 && j === this.columnas - 3) || 
                        (i === this.filas - 3 && j === 2) || (i === this.filas - 3 && j === this.columnas - 3)) {
                        this.matriz[i][j] = 0; // Reemplazar las esquinas interiores por 0
                    } else {
                        this.matriz[i][j] = 2; // Los demás 2's permanecen
                    }
                }
                // Resto de la matriz con 0's
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }

    //Ejercicio 19 tarea
    rellenarMatrizMarcasDeCruz() {
        // Recorremos todas las filas y columnas de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
    
                // Llenamos la diagonal principal (de arriba a la izquierda a abajo a la derecha)
                if (i === j) {
                    this.matriz[i][j] = 1;
                }
                // Llenamos la diagonal secundaria (de arriba a la derecha a abajo a la izquierda)
                else if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // En las demás posiciones dejamos 0
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }
    //Ejercicio 20 tarea
    rellenarMatrizRomboCompleto() {
        let mid = Math.floor(this.filas / 2); // Encuentra el centro de la matriz
        let lastRow = 9; // Fila 10 (índice 9)
    
        // Recorremos todas las filas y columnas de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Creamos el rombo en base a la distancia desde el centro
                let dist = Math.abs(mid - i) + Math.abs(mid - j);
    
                // Si estamos dentro del rombo (distancia menor o igual al centro)
                if (dist <= mid) {
                    this.matriz[i][j] = 0;  // Colocamos ceros dentro del rombo
                } else {
                    this.matriz[i][j] = 1;  // Colocamos unos fuera del rombo
                }
            }
        }
    
        // Aseguramos que la fila 5 (índice 4) sea completamente de ceros
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[4][j] = 0;
        }
    
        // Colocamos los unos en las partes superior e inferior como el patrón
        // Fila 1 a 4, y de la 6 a 9, ajustamos los valores para formar el rombo
        this.matriz[0][0] = 1;
        this.matriz[0][1] = 1;
        this.matriz[1][0] = 1;
        this.matriz[1][2] = 1;
        this.matriz[2][0] = 1;
        this.matriz[2][3] = 1;
        this.matriz[3][0] = 1;
        this.matriz[3][4] = 1;
        this.matriz[5][0] = 1;
        this.matriz[5][4] = 1;
        this.matriz[6][0] = 1;
        this.matriz[6][3] = 1;
        this.matriz[7][0] = 1;
        this.matriz[7][2] = 1;
        this.matriz[8][0] = 1;
        this.matriz[8][1] = 1;
    
        // Dibujar la matriz con el patrón final
        this.dibujarMatriz();
    }

    //Ejercicio 21 tarea
    rellenarMatrizAjedrez() {
        // Recorremos todas las filas y columnas de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alternamos entre 1 y 0 dependiendo de la suma de los índices (i + j)
                if ((i + j) % 2 === 0) {
                    this.matriz[i][j] = 1;  // Colocamos 1 si la suma de los índices es par
                } else {
                    this.matriz[i][j] = 0;  // Colocamos 0 si la suma de los índices es impar
                }
            }
        }
    
        // Dibujar la matriz con el patrón de ajedrez
        this.dibujarMatriz();
    }

    //Ejercicio 22 tarea
    rellenarMatrizFormaOcho() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Llenamos las partes superiores, centrales e inferiores del "8" con 1's
                if (
                    // Parte superior del "8"
                    (i <= 2 && j >= 2 && j <= 7) ||
                    (i === 3 && (j === 2 || j === 7)) ||
                    // Parte central
                    (i === 4 || i === 5) && j >= 2 && j <= 7 ||
                    // Parte inferior del "8"
                    (i >= 6 && j >= 2 && j <= 7) ||
                    (i === 6 && (j === 2 || j === 7))
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz con la forma de "8"
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