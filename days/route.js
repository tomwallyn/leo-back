var bdd = require("./bdd");
var express = require("express");
var app = express.Router();
var cors = require('cors');

app.use(cors());

//Get list Tasks
app.get('/:user_malade', function(req, res) {
    bdd.getListDays(req.params.user_malade).then(function (promise) {
      res.send(promise);
    });
  });

module.exports=app;