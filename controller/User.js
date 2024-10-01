const db = require('../models');


module.exports = {
  findAll: function (req, res) {
    db.User
      .find({ _id: req.params.id })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(502).json(err))
  },
  session: function (req, res) {
    if(req.session.passport?.user) {
      res.json(req.session.passport.user)
    } else {
      res.status(500)
    }
    
  },
  create: function (req, res) {
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
    db.User.findOne({ _id: req.params.id })
    .populate("characters")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  populateCampaign: (req, res) => {
    db.User.findOne({ _id: req.params.id })
    .populate("campaigns")
    .then(function (foundOne) {
      res.json(foundOne)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  logout:(req, res) =>{
    req.logout();
    res.redirect('/');
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