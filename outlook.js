const nodemailer = require('nodemailer');

const [node, script, user, pass] = process.argv
if (!pass) {
    throw Error('usage:node outlook.js {email} {email password}')
}
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: user,
        pass: pass,
    },
    tls: {ciphers: 'SSLv3'}
});

transporter.verify(function (error, success) {
    if (error) {
        console.error('verify error', error);
    } else {
        console.log("Server is ready to take our messages");
        transporter.sendMail({
            from: user,
            to: user,
            subject: `email from ${user}`,
            text: 'This is text!'
        });
    }
});
