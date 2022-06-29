const express = require('express');
const fs = require('fs/promises');

const req1 = express();

req1.get('/', async (_req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    res.status(200).json(talker);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = req1;
