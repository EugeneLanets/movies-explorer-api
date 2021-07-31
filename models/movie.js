// - country — страна создания фильма. Обязательное поле-строка.
// - director — режиссёр фильма. Обязательное поле-строка.
// - duration — длительность фильма. Обязательное поле-число.

const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    require: [true, 'Поле "Название фильма на русском языке" является обязательным'],
  },
  nameEN: {
    type: String,
    require: [true, 'Поле "Название фильма на английском языке" является обязательным'],
  },
  movieId: {
    type: Number,
    require: [true, 'Поле "movieID" является обязательным'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  thumbnail: {
    type: String,
    require: [true, 'Поле "thumbnail" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        require_protocol: true,
        require_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  image: {
    type: String,
    require: [true, 'Поле "thumbnail" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        require_protocol: true,
        require_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  trailer: {
    type: String,
    require: [true, 'Поле "thumbnail" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        require_protocol: true,
        require_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  description: {
    type: String,
    require: [true, 'Поле "Описание" является обязательным'],
  },
  year: {
    type: String,
    require: [true, 'Поле "Год" является обязательным'],
  },
  director: {
    type: String,
    require: [true, 'Поле "Режиссёр" является обязательным'],
  },
  country: {
    type: String,
    require: [true, 'Поле "Страна" является обязательным'],
  },
  duration: {
    type: Number,
    require: [true, 'Поле "Длительность" является обязательным'],
  },

});

module.exports = mongoose.model('movie', movieSchema);
