var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c2Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamp: true
});
var C2 = mongoose.model('C2', c2Schema);

module.exports = C2;
