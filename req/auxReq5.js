const validarTalk = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const validarName = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || name.length === 0) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const validarAge = (req, res, next) => {
  try { 
    const { age } = req.body;
    if (!age || age === 0) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const validarRate = (req, res, next) => {
  try {
    const { talk: { rate } } = req.body;
    if (rate < 1 || rate > 5) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    if (!rate) {
      return res.status(400).json({
        message: 'O campo "rate" é obrigatório' });
    }  
    return next();
  } catch (error) {
      return res.status(401).json({ message: error });
  }
};

const validarDate = (req, res, next) => {
  try {
    const validate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    const { watchedAt } = req.body.talk;
    if (!watchedAt) {
      return res.status(400).json({
        message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!validate.test(watchedAt)) {
      return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const validarToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length < 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

module.exports = {
  validarName,
  validarAge,
  validarRate,
  validarDate,
  validarTalk,
  validarToken,
};