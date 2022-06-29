const express = require('express');
const crypto = require('crypto');
const {
  validateEmail,
  validatePassword,
} = require('./requisito4');

const req3 = express();

req3.post('/', validateEmail, validatePassword, async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = req3;