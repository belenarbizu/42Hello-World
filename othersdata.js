const { OAuth2 } = require('oauth');
const express = require('express');
const axios = require('axios');

const app = express();

const clientID = 'u-s4t2ud-c67ac67d4d99e5b0e02486a49882888bbf5bcad2e9ee8264eaec9334dc58b62f';
const clientSecret = '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';
const redirectURI = 'http://localhost:3000/oauth_callback';
const scopes = 'public';

const oauth2 = new OAuth2(
  clientID,
  clientSecret,
  'https://api.intra.42.fr',
  '/oauth/authorize',
  '/oauth/token',
  null,
  'POST'
);

app.get('/', (req, res) => {
  res.redirect(oauth2.getAuthorizeUrl({ redirect_uri: redirectURI, scope: scopes, response_type: 'code' }));
});

app.get('/oauth_callback', (req, res) => {
  const requestToken = req.query.code;
  console.log(requestToken);

  oauth2.getOAuthAccessToken(requestToken, { 
    grant_type: 'authorization_code',
    client_id: clientID, 
    client_secret: clientSecret, 
    code: requestToken, 
    redirect_uri: redirectURI 
}, (error, accessToken, refreshToken) => {
    if (error) {
      console.error(error);
      res.send('Error generating access token!');
    } else {
      oauth2.get('https://api.intra.42.fr/v2/users/145992', accessToken, function (err, result) {
        if (err) {
          console.log(err);
          res.send('Error getting user information!');
        } else {
          console.log(result);
          res.send('User information received successfully!');
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
