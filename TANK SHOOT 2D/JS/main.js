// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    
    canvas.width = utilsObj.RoundTablero(canvas.width);
    canvas.height = utilsObj.RoundTablero(canvas.height);
    

    console.log('width', canvas.width)
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

const escenario = [ 
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    

];

function drawEscenario(ctx, escenario){
    for(let row = 0; row < escenario.length; row++) {
        for(let col = 0; col < escenario[row].length; col++) {
            const cell = escenario[ row][ col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;


            switch(cell) {
                case 0: //Espacio vacio
                    ctx.fillStyle = "black"
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1: //Pared
                    ctx.fillStyle = "gray"
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;

                default:
                    break;
                    

            }
        }
    }
}

//Logica del juego (actualizacion de pantalla)
function updateGame() {
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawTank(playerTank);

    drawEscenario(ctx, escenario);
    playerTank.drawTank(ctx);

    //drawTank(playerTank); //Dibujamos el tanque del jugador
    enemyTank1.drawEnemyTank(ctx) // Dibujamos el tanque enemigo
    enemyTank2.drawEnemyTank(ctx) // Dibujamos el tanque enemigo
    enemyTank3.drawEnemyTank(ctx) // Dibujamos el tanque enemigo
    enemyTank4.drawEnemyTank(ctx) // Dibujamos el tanque enemigo
  







    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//Iniciar el juego
updateGame();