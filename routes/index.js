const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');

router.get('/', (req, res) => {
  res.send({ message: 'got it now' });
});

router.post('/signup', createUser);
router.post('/signin', login);
router.get('/signout', logout);

module.exports = router;
