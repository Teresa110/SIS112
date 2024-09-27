class Cadena {
<<<<<<< HEAD
    constructor(cadena) {
      this.cadena = cadena;
    }
  
    getCadena() { //Obtiene el valor asignado a la cadena
      return this.cadena;
    }
  
    // Manipulación de cadenas
    concatenar(otraCadena) {  //Unir una cadena con otra
      this.cadena += otraCadena;
    }
  
    invertir() { //Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
    }
  
    // Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
    }
  
    contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
    }
  
    comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
    }
  
    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
    }
  
    // Otras operaciones
    longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
    }
  
    aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
      return this.cadena.toUpperCase();
    }
  
    aMinusculas() { //Obtiene la cadena transformada en minuscula
      return this.cadena.toLowerCase();
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
      default:
        resultadoDiv.innerHTML = 'Método no reconocido.';
    }
  }
=======
  constructor(cadena) {
    this.cadena = cadena;
  }

  getCadena() { //Obtiene el valor asignado a la cadena
    return this.cadena;
  }

  // Manipulación de cadenas
  concatenar(otraCadena) {  //Unir una cadena con otra
    this.cadena += otraCadena;
  }

  invertir() { //Invertir los caracteres de la cadena
    let cadenaInvertida = '';
    for (let i = this.cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += this.cadena[i];
    }
    this.cadena = cadenaInvertida;
  }

  // Comparaciones
  esVacia() { //Compara si la cadena no tiene caracteres
    return this.cadena.length === 0;
  }

  contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
    return this.cadena.includes(subcadena);
  }

  comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
    return this.cadena.startsWith(prefijo);
  }

  terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
    return this.cadena.endsWith(sufijo);
  }

  // Otras operaciones
  longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
    return this.cadena.length;
  }

  aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
    return this.cadena.toUpperCase();
  }

  aMinusculas() { //Obtiene la cadena transformada en minuscula
    return this.cadena.toLowerCase();
  }

  convertToRoman(num) {
    if (num <= 0 || num >= 1000000) {
      throw new Error("El número debe ser un entero positivo entre 1 y 999,999.");
    }

    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (const { value, symbol } of romanNumerals) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    return result;
  }

  generateText(wordCount) {
    if (wordCount <= 0) {
      throw new Error("El número de palabras debe ser un entero positivo.");
    }

    const words = [];

    for (let i = 0; i < wordCount; i++) {
      // Generar una palabra aleatoria de longitud entre 3 y 8
      const wordLength = Math.floor(Math.random() * 6) + 3; // Longitudes de 3 a 8
      let word = '';

      for (let j = 0; j < wordLength; j++) {
        const randomAscii = Math.floor(Math.random() * 62); // Total 62 caracteres
        let char;

        // Generar caracteres aleatorios (A-Z, a-z, 0-9)
        if (randomAscii < 26) {
          char = String.fromCharCode(randomAscii + 65); // A-Z
        } else if (randomAscii < 52) {
          char = String.fromCharCode(randomAscii - 26 + 97); // a-z
        } else {
          char = String.fromCharCode(randomAscii - 52 + 48); // 0-9
        }

        word += char;
      }

      words.push(word);
    }

    return words.join(' ');
  }

  convertToAscii(num) {
    if (num < 0 || num > 127) {
      throw new Error("El número debe estar entre 0 y 127 para la tabla ASCII.");
    }
    return String.fromCharCode(num);
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
    case 'convertToRoman':
      const numRoman = parseInt(valorInput);
      try {
        const roman = cadena.convertToRoman(numRoman);
        resultadoDiv.innerHTML = `${numRoman} en números romanos es '${roman}'`;
      } catch (error) {
        resultadoDiv.innerHTML = error.message;
      }
      break;
    case 'generateText':
      const wordCount = parseInt(valorInput);
      try {
        const randomText = cadena.generateText(wordCount);
        resultadoDiv.innerHTML = `Texto generado: '${randomText}'`;
      } catch (error) {
        resultadoDiv.innerHTML = error.message;
      }
      break;
    case 'convertToAscii':
      const numAscii = parseInt(valorInput);
      try {
        const asciiChar = cadena.convertToAscii(numAscii);
        resultadoDiv.innerHTML = `${numAscii} en ASCII es '${asciiChar}'`;
      } catch (error) {
        resultadoDiv.innerHTML = error.message;
      }
      break;
    default:
      resultadoDiv.innerHTML = 'Método no reconocido.';
  }
}









>>>>>>> 70166a83f368dc049a28517d429fb565367f6ee6
