class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    def saludar(self):
        return f'Hola, mi nombre es {self.nombre}.'

    def cumpleanios(self):
        return f'Felicidades! tienes {self.edad} años.'

    def estudiar(self):
        return f'Estoy estudiando {self.carrera}.'

    def Universidad(self):
        return f'Estoy en la universidad {self.universidad}.'


    #Modificar
    def modificar_nombre(self):
        while True:
            nuevo_nombre = input("Ingrese su nuevo nombre: ")
            if nuevo_nombre.isalpha():
                self.nombre = nuevo_nombre
                break
            else:
                print("Nombre inválido, ingresa solo letras")
        return f'Hola, mi nombre es {self.nombre}.'

    def modificar_edad(self):
        while True:
            try:
                nueva_edad = int(input("Ingrese su nueva edad: "))
                if nueva_edad > 0:
                    self.edad = nueva_edad
                    break
                else:
                    print("Edad invalida, debe ser un numero positivo")
            except ValueError:
                print("La edad debe ser un número entero")
        return f'Felicidades! tienes {self.edad} años.'

    def modificar_carrera(self):
        while True:
            nueva_carrera = input("Ingrese su nueva carrera: ")
            if nueva_carrera.isalpha():
                self.carrera = nueva_carrera
                break
            else:
                print("Carrera invalida, ingresa solo letras")
        return f'Estoy estudiando {self.carrera}.'

    def modificar_universidad(self):
        while True:
            nueva_universidad = input("Ingrese su nueva universidad: ")
            if nueva_universidad.isalpha():
                self.universidad = nueva_universidad
                break
            else:
                print("Universidad invalida, por favor ingrese solo letras.")
        return f'Estoy en la universidad {self.universidad}.'

    # Eliminar
    def eliminar_nombre(self):
        self.nombre = None
        return "Nombre eliminado"

    def eliminar_edad(self):
        self.edad = None
        return "Edad eliminada"

    def eliminar_carrera(self):
        self.carrera = None
        return "Carrera eliminada"

    def eliminar_universidad(self):
        self.universidad = None
        return "Universidad eliminada"


persona = Persona('Teresa', 18, 'Ingenieria Industrial', 'UCB')

# Menú 
while True:
    print("Menú:")
    print("1. Saludar")
    print("2. Edad")
    print("3. Carrera")
    print("4. Universidad")
    print("5. Modificar nombre")
    print("6. Modificar edad")
    print("7. Modificar carrera")
    print("8. Modificar universidad")
    print("9. Eliminar nombre")
    print("10. Eliminar edad")
    print("11. Eliminar carrera")
    print("12. Eliminar universidad")
    print("13. Salir")
    
    opcion = input("Bienvenido, ingrese una opción: ")
    
    if opcion == "1":
        print(persona.saludar())
    elif opcion == "2":
        print(persona.cumpleanios())
    elif opcion == "3":
        print(persona.estudiar())
    elif opcion == "4":
        print(persona.Universidad())
    elif opcion == "5":
        print(persona.modificar_nombre())
    elif opcion == "6":
        print(persona.modificar_edad())
    elif opcion == "7":
        print(persona.modificar_carrera())
    elif opcion == "8":
        print(persona.modificar_universidad())
    elif opcion == "9":
        print(persona.eliminar_nombre())
    elif opcion == "10":
        print(persona.eliminar_edad())
    elif opcion == "11":
        print(persona.eliminar_carrera())
    elif opcion == "12":
        print(persona.eliminar_universidad())
    elif opcion == "13":
        print("ADIOS :)")
        break
    else:
        print("Opcion invalida, porfavor solo ingrese las opciones dentro del parametro")