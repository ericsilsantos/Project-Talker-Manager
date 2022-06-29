const express = require('express');
const fs = require('fs/promises');
// const req5 = require('./requisito5');

const req1e2 = express();
// primeiro requisito
req1e2.get('/', async (_req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    res.status(200).json(talker);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
// segundo requisito
req1e2.get('/:id', async (req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    const { id } = req.params;
    const palestrante = talker.find((each) => each.id === Number(id));
    if (!palestrante) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    res.status(200).json(palestrante);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
// quinto requisito
// req1e2.post('/', req5);
module.exports = req1e2;
