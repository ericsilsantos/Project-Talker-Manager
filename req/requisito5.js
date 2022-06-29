// const express = require('express');
const fs = require('fs/promises');
// const {
//   validareRate,
//   validateAge,
//   validateDate,
//   validateName,
//   validateTalk,
// } = require('./auxReq5');

// const req5 = express();

const req5 = async (req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);

    const { name, age, talk } = req.body;
    const newtalker = {
      id: talker.length + 1,
      name,
      age,
      talk,
    };

    // talker.push(newtalker);
    await fs.writeFile('talker.json', JSON.stringify([...talker, newtalker]));
    return res.status(201).json(newtalker);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = req5;