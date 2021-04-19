const mongoose = require("mongoose");
// friend1 = 607dee0643889112edd14c25
// friend2= 607d7a52ac3ab838bc665a75
const FriendshipSchema = mongoose.Schema({

    UserId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },


    FriendId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },

    status: {
        type: String,
        require: true
    }

   

});

module.exports = mongoose.model('Friendships', FriendshipSchema);