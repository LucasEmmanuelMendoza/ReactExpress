const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
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