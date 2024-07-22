const mongoose = require('mongoose');
const monogoPaginate = require('mongoose-paginate-v2');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true    
    },
    pictureUrl:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true       
    },
    code:{
        type: Number,
        required: true,
        unique: true
    }
})

ProductSchema.plugin(monogoPaginate)

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel
