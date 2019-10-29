const invite = require('../nodemailer');
module.exports = {
    invitation: function (req, res) {
        invite(req.body.recipient, req.body.campaignId, req.body.inviter).then(
            res.status(200)
        )
    }
}