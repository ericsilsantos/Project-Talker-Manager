const fs = require('fs/promises');

const req7 = async (req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    const { id } = req.params;
    const newTalker = talker.filter((each) => each.id !== Number(id));
    await fs.writeFile('talker.json', JSON.stringify(newTalker));
    return res.status(204).end();
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = req7;