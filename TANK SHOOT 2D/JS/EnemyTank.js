//creamos la clase Enemy Tank
class EnemyTank{
    
    // Propiedades del tanque: posición (posX, posY), dirección de disparo, vidas, velocidad y dimensiones del mapa
    posX;
    posY;
    direccionDisparo;
    vidas;
    velocidad;
    anchoMapa;
    altoMapa

// Constructor de la clase
    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa){
        // Propiedades del tanque: posición (posX, posY), dirección de disparo, vidas, velocidad y dimensiones del mapa
 
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 50; //velocidad del movimientop del tanque
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }
    // Método para mover el tanque a la izquierda
    moveLeft(){
        // Verifica que el tanque no salga del borde izquierdo del mapa
        if (this.posX - this.velocidad >= 0){//verificamos el limite izquierdo
            this.posX -= this.velocidad;


        }
    }

    moveRight(){
        if (this.posX + this.velocidad <= this.anchoMapa - 50) {//verificamos el limite izquierdo
            this.posX = this.posX + this.velocidad;
        }

    }

    moveUp(){
        if (this.posY - this.velocidad >= 0){//verificamos el limite izquierdo
            this.posY -= this.velocidad;

        }
    }

    moveDown(){
        if (this.posY + this.velocidad <=  this.altoMapa -50){//verificamos el limite izquierdo
            this.posY += this.velocidad;
        }


    }

    retarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo;
    }


}