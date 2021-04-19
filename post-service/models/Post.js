const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    UserId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },


    title: {
        type: String,
        require: true
    },

    text: {
        type: String,
        require: true
    }

   

});

module.exports = mongoose.model('Posts', PostSchema);