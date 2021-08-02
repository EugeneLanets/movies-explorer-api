const Movie = require('../models/movie');
const NotFoundError = require('../utils/errors/NotFoundError');
const NoAuthorizationError = require('../utils/errors/NotFoundError');

const checkMovieOwner = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ movieId: id })
    .orFail(() => next(new NotFoundError('Запрошенная карточка не найдена')));

  if (String(movie.owner) !== req.user._id) {
    next(new NoAuthorizationError('Невозможно удалить чужую карточку'));
  }

  next();
};

module.exports = checkMovieOwner;
