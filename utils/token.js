const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

const getToken = (payload) => jwt.sign(
  payload,
  JWT_SECRET,
  { expiresIn: '7d' },
);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  getToken,
  verifyToken,
};
