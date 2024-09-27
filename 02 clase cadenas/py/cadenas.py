class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    def get_cadena(self):
        """Obtiene el valor asignado a la cadena"""
        return self.cadena

    def concatenar(self, otra_cadena):
        """Unir una cadena con otra"""
        self.cadena += otra_cadena

    def invertir(self):
        """Invertir los caracteres de la cadena"""
        self.cadena = self.cadena[::-1]

    def es_vacia(self):
        """Compara si la cadena no tiene caracteres"""
        return len(self.cadena) == 0

    def contiene(self, subcadena):
        """Compara si la subCadena existe dentro de la cadena"""
        return subcadena in self.cadena

    def comienza_con(self, prefijo):
        """Compara si la cadena comienza con el prefijo "caracter" """
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):
        """Compara si la cadena termina con el sufijo "caracter" """
        return self.cadena.endswith(sufijo)

    def longitud(self):
        """Obtiene la cantidad de caracteres que tiene la cadena"""
        return len(self.cadena)

    def a_mayusculas(self):
        """Obtiene la cadena transformada en MAYUSCULA"""
        return self.cadena.upper()

    def a_minusculas(self):
        """Obtiene la cadena transformada en minuscula"""
        return self.cadena.lower()


# Ejemplo de uso
cadena = Cadena('')

def ejecutar(metodo, valor_input=''):
    if metodo == 'getCadena':
        print(f'Cadena: {cadena.get_cadena()}')
    elif metodo == 'concatenar':
        cadena.concatenar(valor_input)
        print(f'Cadena actual: {cadena.get_cadena()}')
    elif metodo == 'invertir':
        cadena.invertir()
        print(f'Cadena invertida: {cadena.get_cadena()}')
    elif metodo == 'esVacia':
        print(f'¿Es vacía?: {cadena.es_vacia()}')
    elif metodo == 'contiene':
        print(f'¿Contiene \'{valor_input}\'?: {cadena.contiene(valor_input)}')
    elif metodo == 'comienzaCon':
        print(f'¿Comienza con \'{valor_input}\'?: {cadena.comienza_con(valor_input)}')
    elif metodo == 'terminaCon':
        print(f'¿Termina con \'{valor_input}\'?: {cadena.termina_con(valor_input)}')
    elif metodo == 'longitud':
        print(f'Longitud: {cadena.longitud()}')
    elif metodo == 'aMayusculas':
        print(f'A mayúsculas: {cadena.a_mayusculas()}')
    elif metodo == 'aMinusculas':
        print(f'A minúsculas: {cadena.a_minusculas()}')
    else:
        print('Método no reconocido.')

# Ejemplo de invocación
ejecutar('concatenar', 'Hola')
ejecutar('invertir')
ejecutar('aMayusculas')
