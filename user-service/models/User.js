const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        require: true
    },

    modules_id: {
        type: String,
        require: true
    },

    forename: {
        type: String,
        require: true
    },

    surname: {
        type: String,
        require: true
    },

    year_joined: {
        type: Number,
        require: true
    },

    placement: {
        type: Boolean,
        require: false
    },

    degree_length:  {
        type: Number,
        require: false
    }


});

module.exports = mongoose.model('Users', UserSchema);