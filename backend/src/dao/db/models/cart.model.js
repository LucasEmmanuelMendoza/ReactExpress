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
                    type:Number,
                    required: true,
                    defaul: 1
                }
            }
        ]
    }
})

CartSchema.pre('findOne', function(){
    this.populate('products.product')
})

const CartModel = mongoose.model('carts', CartSchema);

module.exports = CartModel;