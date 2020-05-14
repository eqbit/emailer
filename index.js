const express = require("express");
const gmailSend = require('gmail-send');
const cors = require('cors');
const credentials = require('./config');
const LogRequests = require('./api/log-requsets');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sendEmail = gmailSend({
  user: credentials.user,
  pass: credentials.password,
  to: 'req@omnio.site',
  subject: 'Новый запрос приложения',
});

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});

app.post('/request', function (req, res) {
  
  const { name, email } = req.body;
  
  LogRequests.insertNewRequest({
    name,
    email,
    ip: req.connection.remoteAddress.replace('::ffff:', '')
  });
  
  const html = `
    Запрос приложения с лендинга Omnio <br>
    Имя: ${name} <br>
    Email: ${email}`;

  sendEmail({ html: html }, (error) => {
    if (error) {
      return res.send({ error });
    }
  });
  
  return res.send({ message: 'success' });
});
