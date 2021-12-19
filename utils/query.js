const NotFoundError = require('./errors/NotFoundError');

const makeQuery = (query, res, next, errorMessage) => {
  query
    .orFail(() => new NotFoundError(errorMessage))
    .then((receivedData) => res.send(receivedData))
    .catch((error) => {
      if (error.name === 'ValidationError' || error.name === 'CastError') {
        const status = 400;
        const message = `Некорректный запрос. ${error.message}`;
        next({ ...error, status, message });
      }
      next(error);
    });
};

module.exports = makeQuery;
