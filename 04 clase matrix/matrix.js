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
        for (let i = 0; i < this.columnas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3 // Pintar la fila con el color asignado
            }
        }
    
        this.dibujarMatriz();
    }

    //Ejemplo 8
    llenarMatrizSecuencia2() {
        for (let i = 0; i < this.columnas; i++) {
        
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = j % 3 // Pintar la fila con el color asignado
            }
        }
    
        this.dibujarMatriz();
    }


    
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
}