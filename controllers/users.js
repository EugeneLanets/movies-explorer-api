const bcrypt = require('bcryptjs');
const User = require('../models/user');

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

module.exports = {
  createUser,
};
