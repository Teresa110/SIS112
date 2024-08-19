namespace mi_primera_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola Mundo
        HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        ObtainAge();
        //Tercer metodo, mostrar la edad calculada a partir del anio de nacimiento
        CalculateAge();
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World!");
    }

    public static void ObtainAge()
    {
        Console.WriteLine("Introduce your age:");
        string? ageInput = Console.ReadLine();
        if (string.IsNullOrEmpty(ageInput))
        {
            Console.WriteLine("Introce a value");
        }
        else
        {
            int ageInteger = Int32.Parse(ageInput);
            Console.WriteLine("Your age is: " + ageInteger);
        }
    }

    public static void CalculateAge(){

        Console.WriteLine("introduce the year were you born:");
        string? yearBornInput = Console.ReadLine();
        if (string.IsNullOrEmpty(yearBornInput))
        {
             Console.WriteLine("introduce a valid value:");
        }
        else
        {
            int yearBorn = Int32.Parse(yearBornInput);
            Console.WriteLine("Your calculed age is:" + (2024 - yearBorn));

        }
    }
}



    