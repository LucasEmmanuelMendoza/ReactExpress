const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    cartId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        required: true
    }
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel