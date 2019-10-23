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
  populateCharacter: (req, res) => {
    db.Campaign.findOne({ _id: req.body.id })
    .populate("characters")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  delete: function (req, res) {
    db.Campaign
      .findByIdAndDelete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  }
};