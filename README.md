# My Express App

Este proyecto es una aplicación CRUD (Create, Read, Update, Delete) creada con Node.js y Express. Permite la gestión de productos mediante una interfaz web simple y una API RESTful. La aplicación está configurada para guardar los productos en un archivo `products.json`, asegurando que los datos se persistan entre reinicios.

## Características

- **Crear** productos
- **Leer** la lista de productos
- **Actualizar** productos existentes
- **Eliminar** productos

## Tecnologías Utilizadas

- Node.js
- Express
- HTML/CSS
- JavaScript (ES6)
- Git
- Docker (opcional para el entorno de desarrollo)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/bartze/CRUD-Express-App
   cd my-express-app
    ```

2 **Instala las dependencias**:
    ```bash
    npm install
    ```

3 **Ejecuta la aplicación en modo de desarrollo**:
    ```bash
    npm start
    ```

4 **Accede a la aplicación: Abre tu navegador http://localhost:3000**

## Uso

### Añadir un Producto
1. Completa los campos "Product Name" y "Price".
2. Haz clic en "Add/Update Product".

### Editar un Producto
1. Haz clic en "Edit" junto al producto que deseas actualizar.
2. Modifica los campos necesarios.
3. Haz clic en "Add/Update Product".

### Eliminar un Producto
1. Haz clic en "Delete" junto al producto que deseas eliminar.

## Despliegue en Netlify
Sigue estos pasos para desplegar el proyecto en Netlify:

1. **Sube el proyecto a GitHub.**
2. **Conecta tu repositorio en Netlify** y selecciona el directorio `my-express-app` como el directorio de publicación.
3. **Configura el comando de construcción** (si es necesario):
   ```bash
   npm run build
    ```
## Despliega el sitio.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.

## Licencia
Este proyecto está licenciado bajo la MIT License.


