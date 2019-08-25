var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    dob: Date,
    address: String,
    phone: String,
    role: String
});

var user = new mongoose.model('User', schema);

module.exports = user;
