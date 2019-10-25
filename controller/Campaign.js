const db = require('../models');
const mongoose = require("mongoose")

module.exports = {
  findAll: function (req, res) {
    db.Campaign
      .find({ _id: req.body.id})
      .then(dbCampaign => res.json(dbCampaign))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    db.Campaign
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  },
  createCampaign: (req, res) => {
    let data = req.body
    console.log(data)
    db.Campaign.create({
      name: data.name,
      DM: data.userId
    })
    .then(function (dbCampaign) {
      console.log(dbCampaign)
      return db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.userId) }, { $push: { 'campaigns': [dbCampaign._id] } }, { "new": true, "upsert": true });
    })
    .then(function (dbUser) {
      res.json(dbUser)
      console.log(dbUser)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  update: (req, res) => {
    db.Campaign
      .findOneAndUpdate({_id: req.body.id}, { $push: { 'users': [req.body.userId]}}, { "new": true, "upsert": true })
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