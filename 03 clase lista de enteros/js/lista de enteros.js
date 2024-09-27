class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // orden ascendente 
    }
}

const miLista = new ListaEnteros();

document.getElementById('agregarBtn').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const valor = Number(valorInput.value);
    
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        valorInput.value = '';
        actualizarLista();
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

document.getElementById('eliminarBtn').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const valor = Number(valorInput.value);
    
    if (!isNaN(valor)) {
        miLista.eliminar(valor);
        valorInput.value = '';
        actualizarLista();
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

document.getElementById('buscarBtn').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const valor = Number(valorInput.value);
    
    if (!isNaN(valor)) {
        const index = miLista.buscar(valor);
        if (index !== -1) {
            alert(`El número ${valor} se encuentra en la lista en la posición ${index}.`);
        } else {
            alert(`El número ${valor} no se encuentra en la lista.`);
        }
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

document.getElementById('ordenarBtn').addEventListener('click', () => {
    miLista.ordenar();
    actualizarLista();
});

function actualizarLista() {
    const listaUl = document.getElementById('lista');
    listaUl.innerHTML = ''; // Limpiar la lista actual

    miLista.lista.forEach(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        listaUl.appendChild(li);
    });
}
