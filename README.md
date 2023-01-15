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

Para la verificación Oauth2 copiamos la URI que nos da la app de la intra y hacemos un get que redireccione a esa URI desde el puerto 3000. Probamos de la misma forma que antes.
```java
const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.redirect(
      `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f&redirect_uri=https%3A%2F%2Fgithub.com%2Fbelenarbizu%2F42Hello-World&response_type=code&scope=public`
    );
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
```
Token:

```java
const express = require("express");
const axios = require("axios");

const app = express();
const clientID = "u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f";
const clientSecret = "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";

app.get('/', (req, res) => {
  res.redirect(
    `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f&redirect_uri=https%3A%2F%2Fgithub.com%2Fbelenarbizu%2F42Hello-World&response_type=code`
    );
});

app.get('/oauth/token', (req, res) => {
    const requestToken = req.query.code;
    axios({
        method: "post",
        url: `https://api.intra.42.fr/oauth/token?grant_type=authorization_code&client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        headers: {
            accept: "application/json",
        },  
    }).then((response) => {
        const accessToken = response.data.access_token;
        res.redirect(`https://github.com/belenarbizu/42Hello-World?access_token=${accessToken}`);
    });
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
```
