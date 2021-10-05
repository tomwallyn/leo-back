const MongoClient = require("mongodb").MongoClient;
let client;
let db;

module.exports = {
  getClientConnection: function () {
    if (db) {
      return new Promise(function (resolve, reject) {
        resolve(db);
      });
    }
    return new Promise(function (resolve, reject) {
      module.exports.getClient().connect(function (error, client) {
        db = client.db("leo-api");
        resolve(db);
      });
    });
  },

  disconnect: function () {
    if(client) {
      client.close();
      client = undefined;
    }
  },

  uri: function() {
    return "mongodb+srv://admin:MotDePasse@cluster0.uwwcl.mongodb.net/test";
  },

  getClient: function () {
    if (client == undefined) {
      client = new MongoClient(module.exports.uri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    return client;
  },
};
