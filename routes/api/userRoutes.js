const router = require('express').Router();
const User = require('../../controller/User');
const passport = require('passport')

router.route('/')
    .get(User.findAll)
    .post(User.create);

router.route('/me')
    .get(User.session);

router.route('/login')
    .post(passport.authenticate('local'),
        function (req, res) {
            console.log(req.user + " This is /login")
            res.send("Logged IN")
        }
    );

router.route('/character')
        .post(User.populateCharacter)

router.route('/:id')
    .delete(User.delete);

module.exports = router;