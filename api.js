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
