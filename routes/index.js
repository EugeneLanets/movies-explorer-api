const router = require('express').Router();
const { createUser, login } = require('../controllers/users');

router.get('/', (req, res) => {
  res.send({ message: 'got it now' });
});

router.post('/signup', createUser);
router.post('/signin', login);

module.exports = router;
