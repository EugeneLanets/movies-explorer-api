const router = require('express').Router();
const { getCurrentUserInfo, updateUser } = require('../controllers/users');

router.get('/me', getCurrentUserInfo);
router.patch('/me', updateUser);

module.exports = router;
