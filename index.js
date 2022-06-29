const express = require('express');
const bodyParser = require('body-parser');
const req1e2 = require('./req/requisito1e2');
const req3 = require('./req/requisito3');
const req5 = require('./req/requisito5');
const req6 = require('./req/requisito6');
const req7 = require('./req/requisito7');
const req8 = require('./req/requisito8');
const {
  validarRate,
  validarAge,
  validarDate,
  validarName,
  validarTalk,
  validarToken,
} = require('./req/auxReq5');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', validarToken, req8);
app.use('/talker', req1e2);
app.use('/login', req3);
app.post('/talker',
validarToken, validarTalk, validarRate, validarAge, validarDate, validarName, req5);
app.put('/talker/:id',
validarToken, validarTalk, validarRate, validarAge, validarDate, validarName, req6);
app.delete('/talker/:id', validarToken, req7);

app.listen(PORT, () => {
  console.log('Iniciando projeto');
});
