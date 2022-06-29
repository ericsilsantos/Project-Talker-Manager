const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!email.match(regex)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const minLength = 6;
  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < minLength) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};