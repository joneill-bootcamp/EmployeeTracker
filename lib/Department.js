var orm = require("../config/orm.js");

var Department = {
    all: function (cb) {
        orm.all("department", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("department", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("department", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (objTabVals, condition, cb) {
        orm.delete("department", objTabVals, condition, function (res) {
            cb(res);
        })
    }
};

module.exports = Department;