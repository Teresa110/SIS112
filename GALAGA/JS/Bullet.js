class Projectile {
    constructor(posX, posY, velocidad, direccion) {
        this.posX = posX;
        this.posY = posY;
        this.velocidad = velocidad;
        this.direccion = direccion; // hacia arriba o hacia abajo
    }

    move() {
        this.posY += this.velocidad * this.direccion;
    }
}