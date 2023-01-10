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

```bash
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const UID = "u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f";
const SECRET = "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";
const URL42 = "https://profile.intra.42.fr/";

app.use(cors({ credentials: true, origin: true }));

app.get("/oauth/redirect", (req, res) => {
  axios({
    method: "POST",
    url: `https://api.intra.42.fr/oauth/token?client_id=${UID}&client_secret=${SECRET}&code=${req.query.code}`,
    headers: {
      accept: "application/json",
    },
  }).then((reponse) => {
    //const accessToken = response.data.accessToken;
    res.redirect(
      `http://localhost:3000?access_token=${response.data.accessToken}`
    );
  })
});
/*app.post('/', function (req, res) {
  res.send('[]Saludos desde express');
});
app.get('/', function (req, res) {
  res.send('[]Saludos desde express');
});*/
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
```
