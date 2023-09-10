const mailer = require('nodemailer')

const transporter = mailer.createTransport({
    service : "gmail",
    auth: {
        user: 'ktprodhan@gmail.com',
        pass: 'nwckpxrnvylffcyp'
    }
});

const options = {
    from : 'ktprodhan@gmail.com',
    to: 'ktprodhan@gmail.com',
    subject: 'Mailed by mailer',
    text: 'Something Here'
}
transporter.sendMail(options, (err,data)=>{
    err ? console.log(err) : console.log(data)
})
/********************* End *********************/