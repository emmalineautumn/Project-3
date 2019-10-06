const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Campaign
      .find({})
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    db.Campaign
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(507).json(err))
  },
  update: (req, res) => {
    db.Campaign
      .updateOne(req.params.id)
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },
  delete: function (req, res) {
    db.Campaign
      .findByIdAndDelete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  }
};