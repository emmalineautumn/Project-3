const db = require('../models');
module.exports = {
  findAll: function (req, res) {
    db.User
      .find({username: req.body.username, password: req.body.password})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(502).json(err))
  },
  create: function (req, res) {
    let data = req.body
    db.User
      .create({
        username: data.username,
        password: data.password,
        email: data.email
      })
      .then(results => res.json(results))
      .catch(err => res.status(507).json(err))
  },
  update: (req, res) => {
    db.User
      .updateOne(req.params.id)
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },
  delete: function (req, res) {
    db.User
      .findByIdAndDelete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  }
};