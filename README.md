# 🍳 Backend de Recetas de Cocina

Este proyecto es una API para la gestión de recetas de cocina, desarrollada con **Node.js**, **Express** y **MongoDB**.  
Permite registrar usuarios, autenticarlos y gestionar recetas de forma segura.

---

## 👨‍💻 Autor

**Marcos Joel Tebis**

---

## 🚀 Tecnologías utilizadas

- [bcrypt](https://www.npmjs.com/package/bcrypt) — Para el cifrado de contraseñas.
- [cors](https://www.npmjs.com/package/cors) — Middleware para habilitar CORS.
- [express](https://expressjs.com/) — Framework para el servidor web.
- [express-validator](https://express-validator.github.io/docs/) — Validación de datos en las peticiones.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — Autenticación con JWT.
- [mongoose](https://mongoosejs.com/) — ODM para interactuar con MongoDB.
- [morgan](https://www.npmjs.com/package/morgan) — Logger de peticiones HTTP.

---

## 📦 Instalación

Clona este repositorio e instala las dependencias:

```bash
    git clone https://github.com/KR3RULIE/tp-backend-ejercicio05.git
    npm install
```

## Variables de entorno

Crea el archivo (.env) a la misma altura que el index.js o package.json

```bash
    PORT=3000
    MONGODB=http://localhost:3000/api/recetas
    SECRET_JWT=tu_clave_super_secreta
```

## Iniciar el proyecto:

Escribe en tu terminal el siguiente comando:

```bash
    npm run dev
```
