const nodemailer = require('nodemailer');
require('dotenv').config();

async function invite(recipient, campaign, inviter) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SOURCE_EMAIL,
            pass: process.env.SOURCE_EMAIL_PW
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // transporter.verify((error, success) => {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log('success')
    //     }
    // })

    let info = await transporter.sendMail({
        from: `"Dragonslayer Invites 🐲" <${process.env.SOURCE_EMAIL}>`,
        to: recipient,
        subject: 'Join my Dragonslayer campaign!',
        text: `${inviter} has invited you to join their campaign. To join, go to the dragonslayer.herokuapp.com/campaign/${campaign}`,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Invitation</title>
            <style>
                body {
                    text-align: center;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: gray;
                }
                img {
                    width: 50%;
                    display: block;
                    margin: auto;
                }
                h1{
                    width: 100%;
                    background-color: #b71c1c;
                    color: whitesmoke;
                }
                a {
                    text-decoration: none;
                    background-color: #b71c1c;
                    color: whitesmoke;
                    padding: .5em;
                }
            </style>
        </head>
        <body>
            <h1>An adventure awaits!</h1>
            <p>${inviter} has invited you to join their party on Dragonslayer. Follow this link and sign in to join their campaign!</p>
            <a href="https://thedragonslayer.herokuapp.com/campaign/join/${campaign}">Join Campaign</a>
            <img src="https://thedragonslayer.herokuapp.com/img/dragon_logo.png" alt="dragonslayer">
        </body>
        </html>`
    });
}

module.exports = invite;