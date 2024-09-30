class Cadena {
  constructor(cadena) {
      this.cadena = cadena;
  }

  getCadena() { // Obtiene el valor asignado a la cadena
      return this.cadena;
  }

  // Manipulación de cadenas
  concatenar(otraCadena) { // Unir una cadena con otra
      this.cadena += otraCadena;
  }

  invertir() { // Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
          cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
  }

  // Comparaciones
  esVacia() { // Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
  }

  contiene(subcadena) { // Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
  }

  comienzaCon(prefijo) { // Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
  }

  terminaCon(sufijo) { // Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
  }

  // Otras operaciones
  longitud() { // Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
  }

  aMayusculas() { // Obtiene la cadena transformada en MAYÚSCULA
      return this.cadena.toUpperCase();
  }

  aMinusculas() { // Obtiene la cadena transformada en minúscula
      return this.cadena.toLowerCase();
  }

  // Convertir a números romanos
  convertirARomanos(num) {
      if (num < 1 || num > 1000000) {
          throw new Error("El número debe estar entre 1 y 1,000,000.");
      }

      const valoresRomanos = [
          { valor: 1000, simbolo: 'M' },
          { valor: 900, simbolo: 'CM' },
          { valor: 500, simbolo: 'D' },
          { valor: 400, simbolo: 'CD' },
          { valor: 100, simbolo: 'C' },
          { valor: 90, simbolo: 'XC' },
          { valor: 50, simbolo: 'L' },
          { valor: 40, simbolo: 'XL' },
          { valor: 10, simbolo: 'X' },
          { valor: 9, simbolo: 'IX' },
          { valor: 5, simbolo: 'V' },
          { valor: 4, simbolo: 'IV' },
          { valor: 1, simbolo: 'I' }
      ];

      let resultado = '';

      for (const { valor, simbolo } of valoresRomanos) {
          while (num >= valor) {
              resultado += simbolo;
              num -= valor;
          }
      }

      return resultado;
  }

  // Generar texto aleatorio
  generarTextoAleatorio(cantidadPalabras) {
      if (cantidadPalabras <= 0) {
          throw new Error("La cantidad de palabras debe ser un número entero positivo.");
      }

      const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const textoAleatorio = [];

      const generarPalabraAleatoria = (longitud) => {
          let palabra = '';
          for (let i = 0; i < longitud; i++) {
              const indice = Math.floor(Math.random() * caracteres.length);
              palabra += caracteres[indice];
          }
          return palabra;
      };

      for (let i = 0; i < cantidadPalabras; i++) {
          const longitudPalabra = Math.floor(Math.random() * 10) + 1; // Longitud de 1 a 10
          textoAleatorio.push(generarPalabraAleatoria(longitudPalabra));
      }

      return textoAleatorio.join(' ');
  }

  // Convertir número a ASCII
  convertirASCII(num) {
      if (num < 0 || num > 127) {
          throw new Error("El número debe estar entre 0 y 127.");
      }
      return String.fromCharCode(num); // Convierte el número a su representación ASCII
  }
}

let cadena = new Cadena('');

function ejecutar(metodo) {
  const input = document.getElementById('inputCadena');
  const resultadoDiv = document.getElementById('resultado');
  const valorInput = input.value;

  switch (metodo) {
      case 'getCadena':
          resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
          break;
      case 'concatenar':
          cadena.concatenar(valorInput);
          resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
          break;
      case 'invertir':
          cadena.invertir();
          resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
          break;
      case 'esVacia':
          resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
          break;
      case 'contiene':
          resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
          break;
      case 'comienzaCon':
          resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
          break;
      case 'terminaCon':
          resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
          break;
      case 'longitud':
          resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
          break;
      case 'aMayusculas':
          resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
          break;
      case 'aMinusculas':
          resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
          break;
      case 'convertirARomanos':
          const numeroRomano = parseInt(valorInput);
          try {
              resultadoDiv.innerHTML = `Número romano: ${cadena.convertirARomanos(numeroRomano)}`;
          } catch (error) {
              resultadoDiv.innerHTML = error.message;
          }
          break;
      case 'generarTextoAleatorio':
          const cantidadPalabras = parseInt(valorInput);
          try {
              resultadoDiv.innerHTML = `Texto aleatorio: ${cadena.generarTextoAleatorio(cantidadPalabras)}`;
          } catch (error) {
              resultadoDiv.innerHTML = error.message;
          }
          break;
      case 'convertirASCII':
          const numeroASCII = parseInt(valorInput);
          try {
              resultadoDiv.innerHTML = `Representación ASCII: ${cadena.convertirASCII(numeroASCII)}`;
          } catch (error) {
              resultadoDiv.innerHTML = error.message;
          }
          break;
      default:
          resultadoDiv.innerHTML = 'Método no reconocido.';
  }
}
