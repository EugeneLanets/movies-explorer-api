const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');
const userRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/signin', login);
router.get('/signout', logout);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', moviesRouter);

module.exports = router;
