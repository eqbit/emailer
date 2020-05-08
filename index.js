const sendmail = require('sendmail')();

sendmail({
  from: 'no-reply@eqbit.tech',
  to: 'yd60@mail.ru',
  subject: 'Would you go walk today?',
  html: 'Closer to evening',
}, function(err, reply) {
  console.log(err && err.stack);
  console.dir(reply);
});
