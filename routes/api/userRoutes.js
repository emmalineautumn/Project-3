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
            console.log(req.user + " This is /login")
            res.send("Logged IN")
        }
    );

router.route('/character')
        .post(User.populateCharacter)  
        
router.route('/campaign')
        .post(User.populateCampaign)

router.route('/:id')
    .get(User.findAll)
    .delete(User.delete);

module.exports = router;