const { celebrate, Joi } = require('celebrate');
const urlValidator = require('../utils/url-validator');
const {
  emailMessages,
  passwordMessages,
  nameMessages,
  movieNameMessage,
  movieIdMessages,
  ownerMessages,
  urlMessages,
  descriptionMessages,
  yearMessages,
  directorMessages,
  countryMessages,
  durationMessages,
  idMessages,
} = require('../utils/validation-messages');

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(emailMessages),
    password: Joi.string().required().min(8).messages(passwordMessages),
  }),
});

const validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(emailMessages),
    password: Joi.string().required().min(8).messages(passwordMessages),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .messages(nameMessages),
  }),
});

const validateNewMovie = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required()
      .messages(movieNameMessage),
    nameEN: Joi.string().required()
      .messages(movieNameMessage),
    movieId: Joi.number().required()
      .messages(movieIdMessages),
    owner: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).messages(ownerMessages),
    thumbnail: Joi.string().required().custom(urlValidator).messages(urlMessages),
    image: Joi.string().required().custom(urlValidator).messages(urlMessages),
    trailer: Joi.string().required()
      .custom(urlValidator)
      .messages(urlMessages),
    description: Joi.string().required().messages(descriptionMessages),
    year: Joi.string().required()
      .messages(yearMessages),
    director: Joi.string().required()
      .messages(directorMessages),
    country: Joi.string().required()
      .messages(countryMessages),
    duration: Joi.number().required()
      .messages(durationMessages),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).messages(idMessages),
  }),
});

module.exports = {
  validateSignIn,
  validateSignUp,
  validateNewMovie,
  validateId,
};
