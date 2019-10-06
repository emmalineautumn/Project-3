const router = require('express').Router();
const Campaign = require('../../controller/Campaign');

// '/api/campaign/
router.route('/')
.get(Campaign.findAll)
.post(Campaign.create);

// '/api/campaign/:id
router.route('/:id')
  .delete(Campaign.delete);

module.exports = router