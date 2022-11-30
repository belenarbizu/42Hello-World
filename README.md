# 42Hello-World
onboarding API 42

Los primeros pasos para una APP con conexion a la API42 De primeras vamos a usar nodjs y express.

Primer paso instalar nodejs, en los macs para ello usamos brew:

brew install nodejs

Luego creamos un repositorio de mientras carga, creamos un punto en github. A posterior iniciamos un proyecto de nodejs con:

npm init

Le damos a todo por default.
Después añadimos express

npm install express --save

Ahora usamos un programa de para editar codigo como VSC y editamos el app.js (antes creado touch app.js) Y vamos a realizar una app basica de conexion con el siguiente codigo.

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
Y la probamos en terminal node app.js y posteriormente en un navegador tecleamos localhost:3000

Seguimos la guia de la api https://api.intra.42.fr/apidoc/guides/getting_started
