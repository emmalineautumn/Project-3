const invite = require('../nodemailer');
module.exports = {
    invitation: function (req, res) {
        console.log(req.body)
        invite(req.body.recipient, req.body.campaignId, req.body.inviter)
    }
}