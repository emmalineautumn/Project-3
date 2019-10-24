const db = require('../models');


module.exports = {
  findAll: function (req, res) {
    db.User
      .find({ _id: req.body.id })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(502).json(err))
  },
  session: function (req, res) {
    console.log(req.session.passport.user)
    res.json(req.session.passport.user)
  },
  create: function (req, res) {
    let data = req.body
    console.log(data)
    const { body } = req;
    const { password, username } = body;
    let { email } = body;

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    email = email.toLowerCase();
    email = email.trim();

    db.User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }
      const newUser = new db.User();
      newUser.email = email;
      newUser.username = username;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error on creation'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });
  },
  populateCharacter: (req, res) => {
    db.User.findOne({ _id: req.body.id })
    .populate("characters")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  populateCampaign: (req, res) => {
    db.User.findOne({ _id: req.body.id })
    .populate("campaigns")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  update: (req, res) => {
    User
      .updateOne(req.params.id)
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },
  delete: function (req, res) {
    User
      .findByIdAndDelete(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(502).json(err))
  }
};