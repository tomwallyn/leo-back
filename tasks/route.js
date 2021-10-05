var bdd = require("./bdd");
var express = require("express");
var app = express.Router();
var cors = require('cors');

app.use(cors());

//Get list Tasks (http://localhost:5500/tasks/tom/Lundi/1)
app.get("/:user_malade/:day/:taskNumber", function (req, res) {
  bdd.getTask(req.params.user_malade, req.params.day).then(function (promise) {
    res.send(promise[0].tasks[req.params.taskNumber]);
  });
});

app.post("/:bu", function (req, res) {
  if (req.body.type == "validated" || req.body.type == "rejected") {
    bdd
      .postTaskStatus(
        req.params.status,
        req.body.artifactId,
        req.body.groupId,
        req.body.repo,
        req.body.version,
        req.body.type
      )
      .then(function (promise) {
        res.status(201).send(promise);
      });
  } else {
    res.status(400).send(errorCode.errorBadType);
  }
});

module.exports = app;
