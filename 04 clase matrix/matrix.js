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
        this.vaciarMatriz();
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
    RellenoEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; 
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: 
                    if (col + 1 >= this.columnas) {
                        break; 
                    }
                    col++;
                    break;
                case 1:
                    if (row + 1 >= this.filas) {
                        break;
                    }
                    row++;
                    break;
                case 2: 
                    if (col - 1 < 0) {
                        break; 
                    }
                    col--;
                    break;
                case 3:
                    if (row - 1 < 0) {
                        break; 
                    }
                    row--;
                    break;
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
    RomboConcentrico() {
        this.vaciarMatriz();
    
        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
    
        // Dibujar la pirámide en la mitad superior
        for (let i = 0; i < alturaPiramide; i++) {
            // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
            }
        }
    
        // Dibujar la pirámide invertida en la mitad inferior
        for (let i = 0; i < alturaPiramide; i++) {
            // Calcular los límites de cada fila de la pirámide invertida
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; // Dibujar la pirámide invertida en la parte inferior
            }
        }
    
        this.dibujarMatriz();
    }
    
    //Ejercicio 14 tarea
    rellenarMatrizCrucesConcentricas() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas - 1; i++) { // Excluir la última fila
            for (let j = 0; j < this.columnas; j++) {
                if (
                    i === 0 || i === this.filas - 2 || // Bordes superior e inferior
                    j === 0 || j === this.columnas - 1 || // Bordes izquierdo y derecho
                    i === j || i + j === this.filas - 2 // Diagonales principales
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Última fila completamente de ceros
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[this.filas - 1][j] = 0;
        }
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
    CuadradoDentrodeCuadrado() {
        this.vaciarMatriz();
        const bordeExterior = 0;
        const bordeInterior = 2;
        const limiteExterior = this.filas - 1;
        const limiteInterior = this.filas - 3;
    
        // Dibujar el cuadrado exterior con 1
        for (let i = bordeExterior; i <= limiteExterior; i++) {
            this.matriz[bordeExterior][i] = 1; // Lado superior
            this.matriz[limiteExterior][i] = 1; // Lado inferior
            this.matriz[i][bordeExterior] = 1; // Lado izquierdo
            this.matriz[i][limiteExterior] = 1; // Lado derecho
        }
    
        // Dibujar el cuadrado interior con 2
        for (let i = bordeInterior; i <= limiteInterior; i++) {
            this.matriz[bordeInterior][i] = 2; // Lado superior
            this.matriz[limiteInterior][i] = 2; // Lado inferior
            this.matriz[i][bordeInterior] = 2; // Lado izquierdo
            this.matriz[i][limiteInterior] = 2; // Lado derecho
        }
    
        this.dibujarMatriz();
    }

    //Ejercicio 17 tarea
    llenarMatrizBordesYCentro() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (
                    i >= Math.floor(filas / 3) &&
                    i < filas - Math.floor(filas / 3) &&
                    j >= Math.floor(columnas / 3) &&
                    j < columnas - Math.floor(columnas / 3)
                ) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    //Ejercicio 18 tarea
    rellenarmatrizlineasparalelas() {
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
    

    //Ejercicio 19 tarea
    llenarMarcasDeCruz() {
        this.vaciarMatriz();
        const intervalo = 4; // Ajusta este valor para cambiar la separación entre las marcas de X
        for (let i = 0; i < this.filas; i += intervalo) {
            for (let j = 0; j < this.columnas; j += intervalo) {
                // Dibuja la cruz "X" en cada intervalo
                if (i < this.filas && j < this.columnas) {
                    this.matriz[i][j] = 1; // Esquina superior izquierda
                }
                if (i + 1 < this.filas && j + 1 < this.columnas) {
                    this.matriz[i + 1][j + 1] = 1; // Diagonal hacia abajo
                }
                if (i + 2 < this.filas && j + 2 < this.columnas) {
                    this.matriz[i + 2][j + 2] = 1; // Diagonal hacia abajo
                }
                if (i + 3 < this.filas && j + 3 < this.columnas) {
                    this.matriz[i + 3][j + 3] = 1; // Diagonal hacia abajo
                }
            }
        }
    
        this.dibujarMatriz();
    }
    //Ejercicio 20 tarea
    rellenarMatrizRomboCompleto() {
        this.vaciarMatriz();
            const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
            // Dibuja rombo en la esquina superior izquierda
            for (let i = 0; i <= tamRombo; i++) {
                for (let j = 0; j <= tamRombo - i; j++) {
                    this.matriz[i][j] = 1;
                    this.matriz[j][i] = 1;
                }
            }
            // Dibuja rombo en la esquina superior derecha
            for (let i = 0; i <= tamRombo; i++) {
                for (let j = 0; j <= tamRombo - i; j++) {
                    this.matriz[i][this.columnas - 1 - j] = 1;
                    this.matriz[j][this.columnas - 1 - i] = 1;
                }
            }
            // Dibuja rombo en la esquina inferior izquierda
            for (let i = 0; i <= tamRombo; i++) {
                for (let j = 0; j <= tamRombo - i; j++) {
                    this.matriz[this.filas - 1 - i][j] = 1;
                    this.matriz[this.filas - 1 - j][i] = 1;
                }
            }
            // Dibuja rombo en la esquina inferior derecha
            for (let i = 0; i <= tamRombo; i++) {
                for (let j = 0; j <= tamRombo - i; j++) {
                    this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
                    this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
                }
            }
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
    llenarMatrizRelojDeArena() {
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
    
        // Rellenar el triángulo en la parte superior
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = i;
            const fin = this.columnas - i - 1;
            for (let j = 0; j < this.columnas; j++) {
                // Condición para evitar la diagonal
                if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Rellenar el triángulo invertido en la parte inferior
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = i;
            const fin = this.columnas - i - 1;
            const filaActual = this.filas - i - 1;
            for (let j = 0; j < this.columnas; j++) {
                // Condición para evitar la diagonal
                if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                    this.matriz[filaActual][j] = 1;
                } else {
                    this.matriz[filaActual][j] = 0;
                }
            }
        }
    
        // Añadir el "1" en la primera fila y primera columna (contando desde la derecha)
        this.matriz[0][this.columnas - 1] = 1;
    
        // Añadir el "1" en la décima fila y primera columna contando desde la derecha
        this.matriz[this.filas - 1][this.columnas - 1] = 1;
    
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
        this.ctx.fillStyle = "#000000"; // Color para valor 0
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
        this.ctx.fillStyle = "#7e0000 "; // Color para valor 1 
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
        this.ctx.fillStyle = "#b43e25"; // Color para valor 2 b43e25
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