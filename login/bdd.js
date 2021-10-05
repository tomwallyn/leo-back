const bddconnect = require("../core/bddconnect");

module.exports = {
  connectUser: async function (pseudo, password) {
    return new Promise(function (resolve, reject) {
      bddconnect.getClientConnection().then(function (client) {
        const collection = client.collection("users");
        return collection
          .find({ pseudo: pseudo, pass: password }, { projection: { surname: true, name: true, grade: true, pseudo: true } })
          .toArray(function (error, user) {
            if (error != undefined) {
              reject(error);
            } else {
              resolve(user);
            }
          });
      });
    });
  }
}