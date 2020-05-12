var express = require("express");
var gmailSend = require('gmail-send');
var cors = require('cors');
var credentials = require('./config');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var sendEmail = gmailSend({
  user: credentials.user,
  pass: credentials.password,
  to: 'eqbit@yandex.ru',
  subject: 'Новый запрос приложения',
});

app.listen(3002, function () {
  console.log("Server running on port 3002");
});

app.post('/request', function (req, res) {
  
  var html = 'Запрос приложения с лендинга Omnio <br>Имя: ' + req.body.name + ' <br>Email: ' + req.body.email;
  
  sendEmail({ html: html }, function (error) {
    if (error) {
      return res.send({ error });
    }
  });
  
  return res.send({ message: 'success' });
});
