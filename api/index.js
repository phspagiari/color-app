var express = require('express');
var app = express();
var color = process.env.COLOR;
var app_version = process.env.VERSION;
var service_name = process.env.SERVICE;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
 res.send(`{"service_name":"${service_name}", "version": "${app_version}", "color": "${color}"}`);
});

app.get('/health', function (req, res, next) {
  res.send('OK');
});

app.listen(3000, function () {
  console.log('Running');
});
