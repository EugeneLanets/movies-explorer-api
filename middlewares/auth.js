const WrongTokenError = require('../utils/errors/WrongTokenError');
const { verifyToken } = require('../utils/token');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  let payload;

  if (!token) {
    throw new WrongTokenError('Неудачная попытка авторизации');
  }

  try {
    payload = verifyToken(token);
  } catch (error) {
    throw new WrongTokenError('Неудачная попытка авторизации');
  }

  req.user = payload;
  next();
};

module.exports = auth;
