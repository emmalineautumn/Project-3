const path = require('path');
const router = require('express').Router();
const apiCampaignRoutes = require('./dbRoutes/dbRoutes');


router.use('/api', apiCampaignRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;
