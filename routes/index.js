const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');
const userRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { validateSignIn, validateSignUp } = require('../middlewares/validation');
const NotFoundError = require('../utils/errors/NotFoundError');

router.post('/signup', validateSignUp, createUser);
router.post('/signin', validateSignIn, login);

router.use(auth);

router.get('/signout', logout);

router.use('/users', userRouter);
router.use('/movies', moviesRouter);
router.use('*', () => {
  throw new NotFoundError('Неверный роутер, страница не найдена');
});

module.exports = router;
