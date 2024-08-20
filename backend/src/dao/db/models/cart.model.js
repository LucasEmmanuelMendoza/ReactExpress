const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    products:{
        type:[
            {
                products:{
                    type: mongoose.Schema.Types.ObjectId,
                    required: true
                },
                quantity:{
                    type: Number,
                    required: true,
                    default: 1
                }
            }
        ]
    }
})

CartSchema.pre('findById', function(){
    this.populate('products.product')
})

const CartModel = mongoose.model('carts', CartSchema);

module.exports = CartModel;