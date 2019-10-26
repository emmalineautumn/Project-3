const router = require('express').Router();
const apiCampaignRoutes = require('./campaignRoutes');
const apiCharacterRoutes = require('./characterRoutes');
const apiUserRoutes = require('./userRoutes');
const invitationRoute = require('./invitations')


router.use('/campaign', apiCampaignRoutes);
router.use('/character', apiCharacterRoutes);
router.use('/user', apiUserRoutes);
router.use('/invitations', invitationRoute)

module.exports = router;