const makeQuery = require('../utils/query');
const Movie = require('../models/movie');

const getMovies = (req, res, next) => {
  const owner = req.user._id;
  makeQuery(Movie.find({ owner }), res, next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.create({ ...req.body, owner })
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

const deleteMovie = (req, res, next) => {
  const { id } = req.params;
  makeQuery(
    Movie.findOneAndDelete({ _id: id }),
    res, next,
    'Запрошенный фильм не найдена',
  );
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
