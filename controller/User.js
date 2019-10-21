const User = require('../models/User');
const passport = require("passport")

module.exports = {
  findAll: function (req, res) {
    User
      .find({ username: req.body.username })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(502).json(err))
  },
  session: function (req, res) {
    console.log(req.user)
    res.json(req.user)
  },
  login: function (req, res) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    console.log(req.user)
    passport.authenticate('local');
    console.log('logged in', req.user);
      let userInfo = {
          username: req.user.username
      };
    res.send(userInfo);
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

    User.find({
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
      const newUser = new User();
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