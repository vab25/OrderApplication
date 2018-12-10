const express = require('express');
const path = require('path');
const app = express();

app.get('/login', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send('Hello World');

});

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(8881, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(host, port);
});

exports = module.exports = app;