const express = require('express');
const bodyParser = require('body-parser');
const req1e2 = require('./req/requisito1e2');
const req3 = require('./req/requisito3');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', req1e2);
app.use('/login', req3);

app.listen(PORT, () => {
  console.log('Iniciando projeto');
});
