const fs = require('fs/promises');

const req8 = async (req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    const { q } = req.query;
    const queryTalker = talker.filter((each) => each.name.includes(q));
    if (!q) {
      return res.status(200).json(talker);
    }
    if (!queryTalker) {
      return res.status(200).send([]);
    }
    return res.status(200).json(queryTalker);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = req8;