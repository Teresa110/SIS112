# Variables
nombre = 'Teresa'
edad = 18
carrera = 'Ingeniería Industrial'
universidad = 'UCB'

def saludar():
    print('Hola, mi nombre es ' + nombre)

def cumpleanios():
    print('¡Felicidades! tienes ' + str(edad) + ' años.')

def estudiar():
    print('Estoy estudiando ' + carrera)

def mostrar_universidad():
    print('Estoy en la universidad ' + universidad)

def nuevosaludar():
    global nombre
    nombre = input('Introduce tu nombre por favor: ')
    if nombre:
        saludar()
    else:
        print('El nombre no puede estar vacío.')

def nuevocumpleanios():
    global edad
    edad_input = input('Introduce tu edad por favor: ')
    if edad_input.isdigit() and int(edad_input) > 0:
        edad = int(edad_input)
        cumpleanios()
    else:
        print('Introduce una edad válida (un número positivo).')

def nuevoestudiar():
    global carrera
    carrera = input('Introduce la carrera que estudias por favor: ')
    if carrera:
        estudiar()
    else:
        print('La carrera no puede estar vacía.')

def nuevauniversidad():
    global universidad
    universidad = input('Introduce la universidad donde estudias por favor: ')
    if universidad:
        mostrar_universidad()
    else:
        print('La universidad no puede estar vacía.')

# Mostrar la información inicial
saludar()
cumpleanios()
estudiar()
mostrar_universidad()

while True:
    print('¿Qué quieres hacer?')
    print('1. Actualizar saludo')
    print('2. Actualizar edad')
    print('3. Actualizar carrera')
    print('4. Actualizar universidad')
    print('5. Eliminar')
    print('6. Salir')

    opcion = input('Introduce el número de la opción que deseas: ')
    
    if opcion == '1':
        nuevosaludar()
    if opcion == '2':
        nuevocumpleanios()
    if opcion == '3':
        nuevoestudiar()
    if opcion == '4':
        nuevauniversidad()
    if opcion == '5':
        print("Informacion eliminada")
    if opcion == '6':
        break
    if opcion not in ['1', '2', '3', '4', '5', '6']:
        print('Opción no válida. Por favor, elige una opción del 1 al 6.')
