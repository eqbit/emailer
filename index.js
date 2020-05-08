const sendmail = require('sendmail')();

sendmail({
  from: 'no-reply@eqbit.tech',
  to: 'nik@eqbit.tech',
  subject: 'По работе',
  html: 'Давай остановимся на твоей цифре',
}, function(err, reply) {
  console.log(err && err.stack);
  console.dir(reply);
});
