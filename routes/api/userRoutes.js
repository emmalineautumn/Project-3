const router = require('express').Router();
const User = require('../../controller/User');

router.route('/')
    .get(User.findAll)
    .post(User.create);

router.route('/:id')
    .delete(User.delete);

module.exports = router;