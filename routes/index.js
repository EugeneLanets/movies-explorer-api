const router = require('express').Router();
const { createUser } = require('../controllers/users');

router.get('/', (req, res) => {
  res.send({ message: 'got it now' });
});

router.post('/signup', createUser);

module.exports = router;
