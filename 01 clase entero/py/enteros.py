class Entero:
    def __init__(self, numero=0):
        self.Num = numero

    def set_num(self, numero):
        self.Num = numero

    def get_num(self):
        return self.Num

    def incrementar_num(self):
        self.Num += 1

    def decrementar_num(self):
        self.Num -= 1

    def es_par_impar(self):
        return self.Num % 2 == 0

    def es_negativo_positivo(self):
        return self.Num >= 0

    def factorial(self):
        if self.Num < 0:
            return "No existe factorial de números negativos"
        resultado = 1
        for i in range(1, self.Num + 1):
            resultado *= i
        return resultado

    def es_perfecto(self):
        suma_divisores = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num

    def es_primo(self):
        if self.Num <= 1:
            return False
        if self.Num == 2:
            return True
        if self.Num % 2 == 0:
            return False
        for i in range(3, int(self.Num ** 0.5) + 1, 2):
            if self.Num % i == 0:
                return False
        return True

    def fibonacci(self):
        if self.Num <= 0:
            return "Número debe ser positivo"
        serie = []
        a, b = 0, 1
        for _ in range(self.Num):
            serie.append(a)
            a, b = b, a + b
        return serie

    def es_armstrong(self):
        num_str = str(self.Num)
        suma = sum(int(d)**3 for d in num_str)
        return suma == self.Num

    def es_perfecto_generalizado(self, k):
        suma = sum(i**k for i in range(1, self.Num) if self.Num % i == 0)
        return suma == self.Num ** k

    def calcular_fila_pascal(self):
        fila = [1]
        for i in range(1, self.Num + 1):
            fila.append(fila[-1] * (self.Num - i + 1) // i)
        return fila

    def cifrar_cesar(self, desplazamiento, texto):
        resultado = ''
        for char in texto:
            if char.isalpha():
                codigo = ord(char)
                if char.isupper():
                    resultado += chr((codigo - 65 + desplazamiento) % 26 + 65)
                else:
                    resultado += chr((codigo - 97 + desplazamiento) % 26 + 97)
            else:
                resultado += char
        return resultado

    def tiene_primo_gemelo(self):
        def es_primo(num):
            if num <= 1:
                return False
            for i in range(2, int(num ** 0.5) + 1):
                if num % i == 0:
                    return False
            return True

        return es_primo(self.Num) and (es_primo(self.Num - 2) or es_primo(self.Num + 2))

    def descomponer_en_factores_primos(self):
        num = self.Num
        factores = []
        potencia = 0

        while num % 2 == 0:
            num //= 2
            potencia += 1
        if potencia > 0:
            factores.append((2, potencia))

        for i in range(3, int(num ** 0.5) + 1, 2):
            potencia = 0
            while num % i == 0:
                num //= i
                potencia += 1
            if potencia > 0:
                factores.append((i, potencia))

        if num > 2:
            factores.append((num, 1))
        return factores

    def calcular_catalan(self):
        def factorial(n):
            return 1 if n == 0 else n * factorial(n - 1)

        n = self.Num
        catalan = factorial(2 * n) // (factorial(n + 1) * factorial(n))
        return catalan

    def es_mersenne(self):
        p = (self.Num + 1).bit_length() - 1
        return self.es_primo(p) if (2**p - 1) == self.Num else False


def mostrar_menu():
    print("\nMenú de Opciones:")
    print("1. Ingresar número")
    print("2. Ver número actual")
    print("3. Incrementar número")
    print("4. Decrementar número")
    print("5. Verificar si es Par o Impar")
    print("6. Verificar si es Positivo o Negativo")
    print("7. Calcular Factorial")
    print("8. Verificar si es Número Perfecto")
    print("9. Verificar si es Primo")
    print("10. Mostrar sucesión Fibonacci")
    print("11. Verificar si es Número Armstrong")
    print("12. Verificar si es Perfecto Generalizado")
    print("13. Mostrar Fila de Pascal")
    print("14. Cifrar texto con César")
    print("15. Verificar si tiene Primo Gemelo")
    print("16. Descomponer en Factores Primos")
    print("17. Calcular Número de Catalan")
    print("18. Verificar si es Número de Mersenne")
    print("0. Salir")


def ejecutar_opcion(enter_number):
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            numero = int(input("Ingrese un número: "))
            enter_number.set_num(numero)
        elif opcion == "2":
            print(f"El número actual es: {enter_number.get_num()}")
        elif opcion == "3":
            enter_number.incrementar_num()
            print(f"Número incrementado: {enter_number.get_num()}")
        elif opcion == "4":
            enter_number.decrementar_num()
            print(f"Número decrementado: {enter_number.get_num()}")
        elif opcion == "5":
            es_par = enter_number.es_par_impar()
            print("Es Par" if es_par else "Es Impar")
        elif opcion == "6":
            es_positivo = enter_number.es_negativo_positivo()
            print("Es Positivo" if es_positivo else "Es Negativo")
        elif opcion == "7":
            print(f"Factorial: {enter_number.factorial()}")
        elif opcion == "8":
            es_perfecto = enter_number.es_perfecto()
            print("Es Perfecto" if es_perfecto else "No es Perfecto")
        elif opcion == "9":
            es_primo = enter_number.es_primo()
            print("Es Primo" if es_primo else "No es Primo")
        elif opcion == "10":
            print(f"Fibonacci: {enter_number.fibonacci()}")
        elif opcion == "11":
            es_armstrong = enter_number.es_armstrong()
            print("Es Número Armstrong" if es_armstrong else "No es Número Armstrong")
        elif opcion == "12":
            k = int(input("Ingrese el valor de k: "))
            es_perfecto_gen = enter_number.es_perfecto_generalizado(k)
            print(f"Es Perfecto Generalizado con k={k}" if es_perfecto_gen else f"No es Perfecto Generalizado con k={k}")
        elif opcion == "13":
            print(f"Fila de Pascal: {enter_number.calcular_fila_pascal()}")
        elif opcion == "14":
            desplazamiento = int(input("Ingrese el valor del desplazamiento: "))
            texto = input("Ingrese el texto a cifrar: ")
            print(f"Cifrado César: {enter_number.cifrar_cesar(desplazamiento, texto)}")
        elif opcion == "15":
            tiene_gemelo = enter_number.tiene_primo_gemelo()
            print("Tiene Primo Gemelo" if tiene_gemelo else "No tiene Primo Gemelo")
        elif opcion == "16":
            print(f"Factores Primos: {enter_number.descomponer_en_factores_primos()}")
        elif opcion == "17":
            print(f"Número de Catalan: {enter_number.calcular_catalan()}")
        elif opcion == "18":
            es_mersenne = enter_number.es_mersenne()
            print("Es Número de Mersenne" if es_mersenne else "No es Número de Mersenne")
        elif opcion == "0":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida, intente de nuevo.")


if __name__ == "__main__":
    numero = Entero()
    ejecutar_opcion(numero)

