// - country — страна создания фильма. Обязательное поле-строка.
// - director — режиссёр фильма. Обязательное поле-строка.
// - duration — длительность фильма. Обязательное поле-число.

const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: [true, 'Поле "Название фильма на русском языке" является обязательным'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле "Название фильма на английском языке" является обязательным'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле "movieId" является обязательным'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле "thumbnail" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        required_protocol: true,
        required_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  image: {
    type: String,
    required: [true, 'Поле "image" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        required_protocol: true,
        required_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  trailer: {
    type: String,
    required: [true, 'Поле "trailer" является обязательным'],
    validate: {
      validator: (url) => validator.isURL(url, {
        protocols: ['http', 'https'],
        required_protocol: true,
        required_valid_protocol: true,
      }),
      message: (props) => `${props.value} не является валидным URL`,
    },
  },
  description: {
    type: String,
    required: [true, 'Поле "Описание" является обязательным'],
  },
  year: {
    type: String,
    required: [true, 'Поле "Год" является обязательным'],
  },
  director: {
    type: String,
    required: [true, 'Поле "Режиссёр" является обязательным'],
  },
  country: {
    type: String,
    required: [true, 'Поле "Страна" является обязательным'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле "Длительность" является обязательным'],
  },

});

module.exports = mongoose.model('movie', movieSchema);
