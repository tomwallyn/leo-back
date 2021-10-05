const bddconnect = require("../core/bddconnect");

module.exports = {
  getTask: async function (user_malade, day) {
    return new Promise(function (resolve, reject) {
      bddconnect.getClientConnection().then(function (client) {
        const collection = client.collection("days");
        return collection
          .find({ user_malade: user_malade, day: day }, { projection: { day: true, _id: false, tasks: true, user_responsable: true } })
          .toArray(function (error, listdays) {
            if (error != undefined) {
              reject(error);
            } else {
              resolve(listdays);
            }
          });
      });
    });
  },

  postTaskStatus: async function () {
    var objNew = {
      artifactId: artifactId,
      groupId: groupId,
      repo : repo,
      version: version,
      bu: bu,
      validated: module.exports.getToday(),
      type: type,
    };
    return new Promise(function (resolve, reject) {
      bddconnect.getClientConnection().then(function (client) {
        var collection = client.collection("app")
          collection.insertOne(objNew, function (error, results) {
            if (error) reject(errorCode.errorBdd);
            resolve({ success: true });
          });
      });
    });
  },
};