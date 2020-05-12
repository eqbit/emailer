const express = require("express");
const gmailSend = require('gmail-send');
var cors = require('cors');
const credentials = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sendEmail = gmailSend({
  user: credentials.user,
  pass: credentials.password,
  to: 'eqbit@yandex.ru',
  subject: 'Новый запрос приложения',
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});

app.post('/request', (req, res) => {
  
  const html = `
  Запрос приложения с лендинга Omnio<br>
  Имя: ${req.body.name} <br>
  Email: ${req.body.email}`;
  
  sendEmail({ html }, (error) => {
    if (error) {
      return res.send({ error });
    }
  });
  
  return res.send({ message: 'success' });
});
