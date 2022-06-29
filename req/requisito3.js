const express = require('express');
const crypto = require('crypto');

const req3 = express();

req3.post('/', async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = req3;