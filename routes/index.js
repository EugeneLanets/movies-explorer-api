const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');
const userRouter = require('./users');
const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
  res.send({ message: 'got it now' });
});

router.post('/signup', createUser);
router.post('/signin', login);
router.get('/signout', logout);

router.use(auth);

router.use('/users', userRouter);
module.exports = router;
