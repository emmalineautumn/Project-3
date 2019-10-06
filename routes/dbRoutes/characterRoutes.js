const router = require('express').Router();
const Character = require('../../controller/Character');


// api/campaign/
router.route('/character')
.get(Character.findAll)
.post(Character.create);

// api/campaign/:id
router.route('/character/:id')
  .delete(Character.delete);
