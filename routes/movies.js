const router = require('express').Router();

const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');
const checkMovieOwner = require('../middlewares/owner');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:movieId', checkMovieOwner, deleteMovie);

module.exports = router;