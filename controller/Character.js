const db = require('../models');
const mongoose = require("mongoose")

module.exports = {
  findAll: function (req, res) {
    db.Character
      .find({_id: req.body.id})
      .sort({favorite: 1})
      .then(dbCharacter => res.json(dbCharacter))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    db.Character
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  },
  createCharacter: (req, res) => {
    let data = req.body
    db.Character.create({
      name: data.name,
      class: data.class,
      race: data.race,
      characterAppearance: data.characterAppearance,
      maxHealth: data.maxHealth,
      stats: {
        strength: data.strength,
        dexterity: data.dexterity,
        constitution: data.constitution,
        intelligence: data.intelligence,
        wisdom: data.wisdom,
        initiative: data.initiative,
        charisma: data.charisma
      },
      spells: [data.spells],
      alignment: data.alignment,
      NPC: data.NPC
    })
    .then(function (dbCharacter) {
      db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.userId) }, { $push: { 'characters': [dbCharacter._id] } }, { "new": true, "upsert": true });
      db.Campaign.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.campaignId) }, { $push: { 'characters': [dbCharacter._id] } }, { "new": true, "upsert": true });
    })
    .then(function (dbUser) {
      res.json(dbUser)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  update: (req, res) => {
    db.Character
      .updateOne(req.params.id)
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },
  delete: function (req, res) {
    db.Character
      .findByIdAndDelete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  }
};