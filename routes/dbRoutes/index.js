const router = require('express').Router();
const campaignRoutes = require('./campaignRoutes');
const userRoutes = require('./userRoutes')
const characterRoutes = require('./characterRoutes')

router.use('/campaign', campaignRoutes);
router.use('/user', userRoutes);
router.use('/character', characterRoutes)


module.exports = router;