# 42Hello-World
onboarding API 42

Los primeros pasos para una APP con conexion a la API42 De primeras vamos a usar nodjs y express.

Primer paso instalar nodejs, en los macs para ello usamos brew:

```bash
brew install nodejs
```
Luego creamos un repositorio de mientras carga, creamos un punto en github. A posterior iniciamos un proyecto de nodejs con:
```bash
npm init
```
Le damos a todo por default.
Después añadimos express
```bash
npm install express --save
```
Ahora usamos un programa de para editar codigo como VSC y editamos el app.js (antes creado touch app.js) Y vamos a realizar una app basica de conexion con el siguiente codigo.
```java
const express = require("express");
const app = express();
app.post('/', function (req, res) {
  res.send('[]Saludos desde express');
});
app.get('/', function (req, res) {
  res.send('[]Saludos desde express');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
```
Y la probamos en terminal node app.js y posteriormente en un navegador tecleamos localhost:3000

Seguimos la guia de la api https://api.intra.42.fr/apidoc/guides/getting_started

```java
const express = require("express");

const app = express();
const SECRET = "";

app.get('/', (req, res) => {
  res.redirect(
      `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f&redirect_uri=https%3A%2F%2Fgithub.com%2Fbelenarbizu%2F42Hello-World&response_type=code&scope=public`
    );
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
```
