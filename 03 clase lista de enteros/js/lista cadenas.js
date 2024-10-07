class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.actualizarLista();
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort();
        this.actualizarLista();
    }

    actualizarLista() {
        const listaElement = document.getElementById('listaCadenas');
        listaElement.innerHTML = '';
        this.lista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaElement.appendChild(li);
        });

    
    }
}

/*const miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('Ucb');

//Retornar la Cadena con Mayores Caracteres

//var = let
var a = miLista.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant);
//----------------------------Hola

var b = miLista.lista[1]
console.log(b);
var bCant = b.length;
console.log(bCant);
//--------------------------Mundo
var c = miLista.lista[2]
console.log(c);
var cCant = c.length;
console.log(cCant);//3
//----------------------------------UCB
console.log(miLista.lista);
//-------------------------------------------------buscar el Mayor
var mayor = 0;
var posicion = -1;

if(aCant > mayor){
    mayor = aCant;
    posicion = 0;
}
//----------------------------------
if(bCant > mayor){
    mayor = bCant;
    posicion = 1;
}
//----------------------------
if(cCant > mayor){
    mayor = cCant;
    posicion = 2;
}
//----------------------------


console.log('La mayor cantidad de caracteres tiene:' +mayor);
console.log('La CADENA con mayor cantidad de caracteres es:' + miLista.lista[posicion]);
*/

//REALIZAR EL MISMO EJERCICO UTILIZANDO UN FOR
const miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('UCB SCZ INDUSTRIAL');

// Inicializamos variables para el mayor y la posición
let mayor = 0;
let posicion = -1;

// Recorremos la lista usando un for
for (let i = 0; i < miLista.lista.length; i++) {
    const cadena = miLista.lista[i];
    const longitud = cadena.length;

    // Comparamos la longitud de la cadena actual con el mayor encontrado
    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}

// Mostramos los resultados
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);








document.getElementById('agregarBtn').addEventListener('click', () => {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('inputValor').value = '';
    }
});

document.getElementById('eliminarBtn').addEventListener('click', () => {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.eliminar(valor);
        document.getElementById('inputValor').value = '';
    }
});

document.getElementById('buscarBtn').addEventListener('click', () => {
    const valor = document.getElementById('inputValor').value;
    const index = miLista.buscar(valor);
    alert(index !== -1 ? `Valor encontrado en índice: ${index}` : 'Valor no encontrado');
});

document.getElementById('ordenarBtn').addEventListener('click', () => {
    miLista.ordenar();
});



// Estrellas en el fondo
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.appendChild(starsContainer);

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}