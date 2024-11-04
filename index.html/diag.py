import matplotlib.pyplot as plt
import pandas as pd
import matplotlib.dates as mdates
from matplotlib.dates import DateFormatter
from datetime import datetime

# Datos del cronograma
data = {
    'Tarea': [
        'Diseño final en SolidWorks',
        'Compra de materiales',
        'Corte y preparación de materiales',
        'Ensamblaje preliminar',
        'Montaje de componentes adicionales',
        'Aplicación de acabados (pintura y recubrimiento)',
        'Pruebas y ajustes',
        'Entrega final'
    ],
    'Inicio': [
        '2024-10-10', '2024-10-15', '2024-10-20', '2024-10-26',
        '2024-11-06', '2024-11-13', '2024-11-19', '2024-11-26'
    ],
    'Fin': [
        '2024-10-14', '2024-10-19', '2024-10-25', '2024-11-05',
        '2024-11-12', '2024-11-18', '2024-11-25', '2024-12-01'
    ]
}

# Convertir las fechas a formato datetime
df = pd.DataFrame(data)
df['Inicio'] = pd.to_datetime(df['Inicio'])
df['Fin'] = pd.to_datetime(df['Fin'])

# Crear la figura y los ejes
fig, ax = plt.subplots(figsize=(10, 6))

# Crear el diagrama de Gantt
for i, task in enumerate(df['Tarea']):
    ax.barh(task, (df['Fin'][i] - df['Inicio'][i]).days, left=df['Inicio'][i], color='skyblue')

# Formato de las fechas en el eje x
ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=1))
ax.xaxis.set_major_formatter(DateFormatter("%b %d"))

# Configurar etiquetas y título
ax.set_xlabel('Fecha')
ax.set_ylabel('Tarea')
ax.set_title('Diagrama de Gantt - Proyecto Bicicleta Elíptica Móvil')
plt.xticks(rotation=45)

# Mostrar el gráfico
plt.tight_layout()
plt.show()
