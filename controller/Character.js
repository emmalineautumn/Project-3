const db = require('../models');
const mongoose = require("mongoose")

module.exports = {
  findAll: function (req, res) {
    db.Character
      .find({ _id: req.body.id })
      .sort({ favorite: 1 })
      .then(dbCharacter => res.json(dbCharacter))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    const data = req.body
    db.Character
      .create({
        name: data.name,
        class: data.class,
        race: data.race,
        characterAppearance: data.characterAppearance,
        maxHealth: data.maxHealth,
        stats: {
          strength: data.stats.strength,
          dexterity: data.stats.dexterity,
          constitution: data.stats.constitution,
          intelligence: data.stats.intelligence,
          wisdom: data.stats.wisdom,
          initiative: data.stats.initiative,
          charisma: data.stats.charisma
        },
        spells: [data.spells],
        alignment: data.alignment,
        NPC: data.npc
      })
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
        strength: data.stats.strength,
        dexterity: data.stats.dexterity,
        constitution: data.stats.constitution,
        intelligence: data.stats.intelligence,
        wisdom: data.stats.wisdom,
        initiative: data.stats.initiative,
        charisma: data.stats.charisma
      },
      spells: [data.spells],
      alignment: data.alignment,
      NPC: data.npc
    })
      .then(function (dbCharacter) {
        db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.userId) }, { $push: { 'characters': [dbCharacter._id] } }, { "new": true, "upsert": true })
          .then(function (dbUser) {
            if (data.campaignId) {
              db.Campaign.findOneAndUpdate({ _id: mongoose.Types.ObjectId(data.campaignId) }, { $push: { 'characters': [dbCharacter._id] } }, { "new": true, "upsert": true })
                .then(
                  res.json(dbUser)
                );
            } else {
              res.json(dbUser)
            }
          })
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
      .then(results => {
        res.json(results)
      })
      .catch(err => res.status(502).json(err))
  }
};