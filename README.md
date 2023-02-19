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

Una vez hemos hecho la conexión, tenemos que generar el token. 

Primero, instalamos las dependencias axios y oauth2. Axios nos permite realizar solicitudes HTTP y oauth2 lo utilizamos para manejar la verificación Oauth2. Después, creamos un objeto oauth2 y proporcionamos las credenciales de cliente necesarias. Utilizamos el método getAuthorizeUrl() de la librería Oauth2 que nos construye y devulve una URL de autorización (nos devuelve la misma que hay en la intra).

Tenemos que cambiar la redirect URI a 'http://localhost:3000/oauth_callback' para poder obtener el token. Para poder obtenerlo, una vez realizamos la verificación, recogemos el code temporal que usaremos para cambiarlo por el token.

Utilizamos el método getOAuthAccessToken() de la librería oauth que se utiliza para obtener un token de acceso después de haber obtenido un código de autorización válido. El método envía una solicitud al servidor deautorización con el código de autorización y la información del cliente. En este caso, los parámetros son "grant_type" que es authorization_code, "client_id", "client_secret", "code" y "redirect_uri".

Una vez se ha completado la solicitud por el token de acceso, nos devuelve, en caso de error, un objeto de error en el parámetro "error". Si la solicitud ha tenido éxito, "accessToken" contiene el token de acceso y "refreshToken" contiene el token de actualización.

Ahora que tenemos el token, podemos hacer las peticiones a la API. En esta página podemos ver todas las peticiones que podemos hacer https://api.intra.42.fr/apidoc/2.0.html

Para hacer una petición para obtener mis datos, tenemos que hacer una solicitud GET a la API de 42 utilizando esta URL: 'https://api.intra.42.fr/v2/me'. Si ha habido algún error, imprimimos el error por consola y si ha tenido éxito, imprime mis datos.

Podemos hacer una petición para obtener los datos de otra persona. Hacemos una solicitud GET con la URL 'https://api.intra.42.fr/v2/users' y escogemos un id de cualquier persona. Volvemos a hacer la petición con la URL 'https://api.intra.42.fr/v2/users/id' intercambiando el id por el número escogido.
