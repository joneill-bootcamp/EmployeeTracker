var orm = require("../config/orm.js");

var Employee = {
    all: function (cb) {
        orm.all("employee", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("employee", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("employee", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (objTabVals, condition, cb) {
        orm.delete("employee", objTabVals, condition, function (res) {
            cb(res);
        })
    }
};

module.exports = Employee;