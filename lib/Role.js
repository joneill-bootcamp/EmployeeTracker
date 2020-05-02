var orm = require("../config/orm.js");

var Role = {
    all: function (cb) {
        orm.all("role", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("role", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("role", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (objTabVals, condition, cb) {
        orm.delete("role", objTabVals, condition, function (res) {
            cb(res);
        })
    }
};

module.exports = Role;