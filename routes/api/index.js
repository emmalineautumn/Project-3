const router = require('express').Router();
const apiCampaignRoutes = require('./campaignRoutes');
const apiCharacterRoutes = require('./characterRoutes');
const apiUserRoutes = require('./userRoutes');



router.use('/campaign', apiCampaignRoutes);
router.use('/character', apiCharacterRoutes);
router.use('/user', apiUserRoutes);

module.exports = router;