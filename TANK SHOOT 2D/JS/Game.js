class Game{
    ancho;
    alto;
    cantColumnas; //Valores calclados a partir de "ancho"
    altoCelda;
    anchoCelda;
    cantFilas;    //Valores calculados a partir de "alto"
    estadoJuego;
    

    constructor(_ancho, _alto, _estadoJuego){
        this.ancho = _ancho; // valor del ancho ??? 
        this.alto = _alto;   // valor del alto ???
        this.estadoJuego = _estadoJuego;

        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS;
        this.cantFilas = CANT_FILAS;
        this.anchoCelda = utilsObj.Redondear(this.ancho / this.cantColumnas);
        this.altoCelda = utilsObj.Redondear(this.alto / this.cantFilas);

        console.log("cantColumnas", this.cantColumnas)
        console.log("cantFilas", this.cantFilas)

        console.log("anchoCelda", this.anchoCelda)
        console.log("altoCelda", this.altoCelda)
        
        


    }

    start(){
        this.estadoJuego = "playing";

    }

    reset(){
        this.estadoJuego = "reset";
        
    }
}