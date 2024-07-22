const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name:{
        Type: String,
        required: true
    },
    last_name:{
        Type:String,
        required: true
    },
    age:{
        Type:Number
    },
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        required: true
    }
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel