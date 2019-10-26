const router = require('express').Router();
const User = require('../../controller/User');
const passport = require('passport')

router.route('/')
    .post(User.create);

router.route('/me')
    .get(User.session);

router.route('/login')
    .post(passport.authenticate('local'),
        function (req, res) {
            res.send("Logged IN")
        }
    );

router.route('/character/:id')
        .get(User.populateCharacter)  
        
router.route('/campaign/:id')
        .get(User.populateCampaign)

router.route('/logout')
        .get(User.logout)

router.route('/:id')
    .get(User.findAll)
    .delete(User.delete);

module.exports = router;