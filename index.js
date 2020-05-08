const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '69caaeec9d9418',
    pass: '08185ce6c96872'
  }
});

const message = {
  from: 'eqbits@gmail.com', // Sender address
  to: 'to@email.com',         // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});
