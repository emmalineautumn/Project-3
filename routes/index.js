const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const Campaign = require('../controller/Campaign')

router.use("/api", apiRoutes);
router.route("/viewcampaign/:id")
  .get(Campaign.viewCampaign)

if (process.env.NODE_ENV === "production") {
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;
