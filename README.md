# Inventario Backend

## Descripción
Este repositorio contiene el backend del proyecto de gestión de inventarios.  
Se encarga de manejar la lógica del servidor, las rutas, la base de datos y las operaciones CRUD.

## Tecnologías
- Node.js
- Express
- MongoDB (o la base de datos que uses)
- JavaScript

## Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/MayArevalo25/inventario-backend.git
Entrar en la carpeta del proyecto:

cd inventario-backend


Instalar dependencias:

npm install

Configuración

Crear un archivo .env para las variables de entorno:

PORT=3000
DB_URI=<tu_uri_de_base_de_datos>

Uso

Iniciar el servidor:

npm start


o

node index.js


Las rutas principales se encuentran en la carpeta routes.

La lógica de negocio está en controllers.

Estructura de Carpetas
backend/
│
├── config/         # Configuración de la base de datos y otras variables
├── controllers/    # Controladores con la lógica de las rutas
├── routes/         # Definición de las rutas de la API
├── models/         # Modelos de la base de datos
├── .gitignore      # Ignora node_modules y archivos sensibles
├── package.json    # Dependencias y scripts del proyecto
└── index.js        # Punto de entrada del servidor

Notas

node_modules no se suben al repositorio.

Usar GitHub Token para subir cambios si se requiere autenticación.
