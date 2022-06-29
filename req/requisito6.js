const fs = require('fs/promises');

const req6 = async (req, res) => {
  try {
    const data = await fs.readFile('talker.json', 'utf-8');
    const talker = await JSON.parse(data);
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const editTalk = {
      id: Number(id), name, age, talk,
    };
    const oldTalker = talker.findIndex((each) => each.id === Number(id));
  
    talker[oldTalker] = editTalk;
    
    await fs.writeFile('talker.json', JSON.stringify(talker));
    return res.status(200).json(editTalk);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = req6;