const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { getToken } = require('../utils/token');

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  User.create({ name, email, password: hash })
    .then((user) => res.send({ data: { email: user.email, _id: user._id } }))
    .catch((error) => {
      if (error.name === 'MongoError' && error.code === 11000) {
        const status = 409;
        const message = 'Адрес электронной почты занят';

        return next({ ...error, status, message });
      }

      return next(error);
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { _id } = await User.findUserByCredentials(email, password);
    const token = getToken({ _id });

    res
      .cookie('jwt', token, {
        maxAge: 360000 * 24 * 7,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      .send({ message: 'Вход в систему успешно выполнен' });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  res
    .status(200)
    .clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    })
    .send({ message: 'Вы успешно вышли из системы!' });
};

module.exports = {
  createUser,
  login,
  logout,
};
