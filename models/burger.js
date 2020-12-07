let orm = require("../config/orm");

const burger = {
    selectAll: function() {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objVals, condition, cb) {
        orm.updateOne("burger", objVals, condition, function(res) {
            cb(res);
        });
    }
};



module.exports = burger;