//Seleccionamos el camvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

}

//Llamamos a la funcion al cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//cREAMOS UN OBJETO DE JUEGO

const game = new Game(canvas.width, canvas.height, "start");

//creamops un tanque de jugador y un tanque de enemigo

const playerTank = new Tank (100, 100, 'up', 3);
const enemyTank = new EnemyTank (500, 100, 'down', 3);

//Dibujamos los elementos en canvas
function drawTank(tank) {
    ctx.fillstyle = 'green';
    //representamos el tanque con un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);


}
function drawEnemyTank(enemyTank) {
    ctx.fillStyle ='red';
    //representamos el tanque enemigo con un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);

}

//LOgica de juego actualizacion de la pantalla
function updateGame() {
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawTank(playerTank);
    drawEnemyTank(enemyTank);

    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//iniciar el juego
updateGame();