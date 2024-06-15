Claro, aquí está el README actualizado con la información sobre la API, sus carpetas `data` y `logic`, y el archivo `index.js` para manejar las solicitudes `GET`, `POST` y `DELETE`.

---

# To-Do List con React <img src="https://skillicons.dev/icons?i=react&perline=14" /> y Vite <img src="https://skillicons.dev/icons?i=vite&perline=14" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Icons8_flat_todo_list.svg/768px-Icons8_flat_todo_list.svg.png" alt="To-Do List Icon" width="100">

Este es un proyecto simple de una lista de tareas (To-Do List) creado con React y Vite. El objetivo de este proyecto es proporcionar una interfaz interactiva donde los usuarios puedan agregar, marcar como completadas y eliminar tareas.

## Características

- Añadir tareas
- Marcar tareas como completadas
- Eliminar tareas

## Tecnologías utilizadas

- [React](https://reactjs.org/) <img src="https://skillicons.dev/icons?i=react&perline=10" width="30" />
- [Vite](https://vitejs.dev/) <img src="https://skillicons.dev/icons?i=vite&perline=10" width="30" />

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v14 o superior) <img src="https://skillicons.dev/icons?i=nodejs&perline=10" width="30" />
- [npm](https://www.npmjs.com/) <img src="https://skillicons.dev/icons?i=npm&perline=10" width="30" /> 

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. **Clona el repositorio:**

```bash
git clone (https://github.com/USERNAME/TodoList.git)
```

2. **Navega al directorio del proyecto:**

```bash
cd app
```

3. **Instala las dependencias:**

```bash
npm install
```

## Uso

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador, ejecuta:

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

```plaintext
app/
├── api/
│   ├── data/
│   │   └── tasks.json
│   │   └── data.js
│   ├── logic/
│   │   └── logic.js
│   └── index.js
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── LICENSE
```

## API

El proyecto también incluye una API simple que permite almacenar las tareas en un archivo `tasks.json`. La API tiene las siguientes rutas:

- **GET /tasks**: Obtiene todas las tareas.
- **POST /tasks**: Crea una nueva tarea.
- **DELETE /tasks/:id**: Elimina una tarea por su ID.

### Estructura de la API

- **data**: Carpeta que contiene el archivo `tasks.json` donde se almacenan las tareas.
- **logic**: Carpeta que contiene la lógica de la API en `logic.js`.
- **index.js**: Archivo principal que maneja las solicitudes GET, POST y DELETE.

## Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto de la rama `develop`.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`).
4. Haz push a la rama (`git push feature/nueva-funcionalidad`).
5. Abre un Pull Request contra `develop` con la nueva feature.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por utilizar esta lista de tareas! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.

---

### Colaboradores

[![Web](https://img.shields.io/badge/GitHub-Jack-FFA500?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/JackDev21)

[![Web](https://img.shields.io/badge/GitHub-Adrian-FFA500?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/AdrianGonzalo)

[![Web](https://img.shields.io/badge/GitHub-Jose-FFA500?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/j0sep0z0)

---
