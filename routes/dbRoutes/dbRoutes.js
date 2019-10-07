const router = require('express').Router();
const Campaign = require('../../controller/Campaign');
const User = require('../../controller/User');
const Character = require('../../controller/Character');

router.route('/campaign')
.get(Campaign.findAll)
.post(Campaign.create);

router.route('/campaign/:id')
  .delete(Campaign.delete);
  
router.route('/character')
.get(Character.findAll)
.post(Character.create);

router.route('/character/:id')
  .delete(Character.delete);

router.route('/login')
.get(User.findAll)

router.route('/register')
.get(User.findAll)
.post(User.create);

router.route('/user')
.get(User.findAll)

router.route('/user/:id')
  .delete(User.delete);
  
module.exports = router