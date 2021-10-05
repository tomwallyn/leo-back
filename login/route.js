var bdd = require("./bdd");
var express = require("express");
var app = express.Router();
var cors = require('cors');

app.use(cors());

//Post user Login
app.post('/', function(req, res) {
    bdd.connectUser(req.body.pseudo, req.body.password).then(function (promise) {
      res.send(promise);
    });
  });

module.exports=app;