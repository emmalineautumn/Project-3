const db = require('../models');
module.exports = {
  findAll: function (req, res) {
    db.Character
      .find({})
      .sort({favorite: 1})
      .then(dbCharacter => res.json(dbCharacter))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    console.log(req.body)
    db.Character
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.status(507).json(err))
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