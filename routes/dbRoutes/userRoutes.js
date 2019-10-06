const router = require('express').Router();
const User = require('../../controller/User');


// api/campaign/
router.route('/')
.get(User.findAll)
.post(User.create);

// api/campaign/:id
router.route('/:id')
  .delete(User.delete);

module.exports = router;