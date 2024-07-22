const CartModel = require("../dao/db/models/cart.model");

class CartManager{
    async createCart(){
        try{
            const returnCreate = await CartModel.create([])
            if(returnCreate){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async updateCart(id, value){
        try{
            const returnUpdate = await CartModel.findOneAndUpdate({_id: id}, {$set: value})
            if(returnUpdate){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async getCartById(id){
        try{
            const foundCart = await CartModel.findById(id)
            if(foundCart){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async deleteCart(id){
        try{
            const returnDelete = await CartModel.findOneAndDelete({_id: id})
            if(returnDelete){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = CartManager