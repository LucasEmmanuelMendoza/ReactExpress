const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    last_connection:{
        type: Date
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