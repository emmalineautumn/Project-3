const router = require('express').Router();
const invite = require('../../controller/Invitations');

router.route('/')
    .post(invite.invitation);

module.exports = router