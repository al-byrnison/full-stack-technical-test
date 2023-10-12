# full-stack-technical-test

## Descripción

Repositorio para prueba técnica de CleverIT.

- Este repositorio se configuro  como monorepo con turbo repo, lo cual facilita el despliegue de este al contener tanto el front como el backend en un mismo repositorio.
- Para la utilización de css, en UI se recurrió al Framework Tailwind css. 
- La aplicación consta según las instrucciones de la prueba de un modulo de front para realizar la creacion, vista, actualización y eliminación de tareas. 
- En el backend se utiliza el framework nest js y como base de datos mongoDB, para realizar la conexión con los respectivos endpoints.

### Tecnologías utilizadas:
-FRONTEND
- Vite js
- React js
- TypeScript
- Tailwind (css)   

-BACKEND
- nest js
- mongoDB
- TypeScript

### Requerimientos:
- node 16 o superior

### Instrucciones:
- Clonar el repositorio

```sh
git clone https://github.com/al-byrnison/full-stack-technical-test.git
```

- Instalar dependencias con el comando

```sh
cd full-stack-technical-test
yarn 
```

- Ejecución en modo desarrollo 

```sh
yarn dev
```

Abrir el navegador en http://localhost:5173

- Ejecución en modo producción 
yarn build
node apps/backend/dist/main.js

```sh
yarn build
node apps/backend/dist/main.js
```

Abrir el navegador en http://localhost:3000
