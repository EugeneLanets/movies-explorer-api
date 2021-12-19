const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const WrongCredentialsError = require('../utils/errors/WrongCredentialsError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле "Email" является обязательным'],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: (props) => `${props.value} is not valid email`,
    },
  },
  password: {
    type: String,
    minlength: [8, 'Пароль не должен быть короче 8 символов'],
    required: [true, 'Поле "Пароль" является обязательным'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Поле "Имя" является обязательным'],
    minlength: [2, 'Имя не должно быть короче двух символов'],
    maxlength: [30, 'Имя не должно быть длиннее 30 символов'],
  },
});

userSchema.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  const user = await this.findOne({ email }).select('+password')
    .orFail(new WrongCredentialsError('Неправильная почта или пароль'));

  const matched = await bcrypt.compare(password, user.password);

  if (!matched) {
    return Promise.reject(new WrongCredentialsError('Неправильная почта или пароль'));
  }

  return user;
};

module.exports = mongoose.model('user', userSchema);
