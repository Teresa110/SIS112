// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = Math.round(canvas.width/50) * 50;
    canvas.height = Math.round(canvas.height/50) * 50;

    console.log('width', canvas.with)
    console.log('height', canvas.height)
}

// Llamamos a la funcion al cargar la pagina
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

//Creamos un tanque de jugador y uno de enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(100, 100, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(700, 200, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(500, 400, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(600, 100, 'down', 3, game.ancho, game.alto);




// Dibujamos los elementos en el canvas
function drawTank(tank) {
    ctx.fillStyle = 'green';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(enemyTank) {
    ctx.fillStyle = 'red';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key) {
        //las teclas de las Flechas del teclado
        case 'ArrowLeft' :
            playerTank.moveLeft();
            break;
        case 'ArrowRight' :
            playerTank.moveRight();
            break;
        case 'ArrowUp' :
            playerTank.moveUp();
            break;
        case 'ArrowDown' :
            playerTank.moveDown();
            break;
        //las teclas de las letras del teclado
        case 'a':
            playerTank.moveLeft();
            break
        case 'd' :
            playerTank.moveRight();
            break
        case 'w' :
            playerTank.moveUp();
            break
        case 's' :
            playerTank.moveDown();
            break;
    }
});

//Añadir movimiento aleatorio al enemigo

function moveEnemyTankRandomly(enemyTank) {
    const directions =  ['left', 'right', 'up', 'down' ];//Posibles direcciones
    const randomDirection = directions  [Math.floor(Math.random()* directions.length)];

    //Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection){
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;


    }


}

//Hacemos que el tanque se mueve cada 500ms
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
}, 300);

setInterval(() => {
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);


}, 100);

//Logica del juego (actualizacion de pantalla)
function updateGame() {
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank); //Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank1); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank2); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank3); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank4); // Dibujamos el tanque enemigo
  







    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//Iniciar el juego
updateGame();