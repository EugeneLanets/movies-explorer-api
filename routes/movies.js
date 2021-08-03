const router = require('express').Router();

const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');
const checkMovieOwner = require('../middlewares/owner');
const { validateNewMovie } = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', validateNewMovie, createMovie);
router.delete('/:id', checkMovieOwner, deleteMovie);

module.exports = router;
