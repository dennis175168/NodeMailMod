const nodemailer = require('nodemailer');
require('dotenv').config();

function SendMail(form , cb) {

    var receiver = form[0].receiver;
    var subject = form[0].subject;
    var text = form[0].text;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Account,
            pass: process.env.Password // naturally, replace both with your real credentials or an application-specific password
        }
    });

    const mailOptions = {
        from: process.env.Account,
        to: receiver,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            cb(undefined, { error: error });
        } else {
            console.log('Email sent: ' + info.response);
            var res = "success"
            cb(undefined, res)
        }
    });
}


module.exports = {
    SendMail
}