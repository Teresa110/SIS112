class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
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

function actualizarLista() {
    const listaUl = document.getElementById('lista');
    listaUl.innerHTML = ''; // Limpiar la lista actual

    miLista.lista.forEach(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        listaUl.appendChild(li);
    });
}
