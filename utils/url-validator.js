const validator = require('validator');

const urlValidator = (value) => {
  const result = validator.isURL(value, {
    protocols: ['http', 'https'],
    required_protocol: true,
    required_valid_protocol: true,
  });
  if (result) {
    return value;
  }
  throw new Error('Невалидный URL');
};

module.exports = urlValidator;
