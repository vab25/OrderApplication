const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.post('/login', function(req, res) {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send('Hello World').status(200);

});


const server = app.listen(8881, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(host, port);
});

exports = module.exports = app;