const CartModel = require("../dao/db/models/cart.model");

class CartManager{
    async createCart(){
        try{
            const result = await CartModel.create([])
            if(!result){
                throw new Error('Error Creating A New Cart')
            }
        }catch(error){
            throw error
        }
    }

    async deleteCart(id){
        try{
            const returnDelete = await CartModel.findOneAndDelete({_id: id})
            if(!returnDelete){
                throw new Error('Cart Not Found')
            }
        }catch(error){
            if(error.message === 'Cart Not Found'){
                throw error;
            }
            throw new Error('Error Deleting Cart');
        }
    }

    async getCartById(id){
        try{
            const foundCart = await CartModel.findById(id)
            if(!foundCart){
                throw new Error('Cart Not Found');
            }
            return foundCart;
        }catch(error){
            if(error.message === 'Cart Not Found'){
                throw error;
            }
            throw new Error('Error Getting Cart');
        }
    }

    async addToCart(productId, cartId){
        try{
            const foundCart = await Carts.findOne({_id: cartId})
            if(foundCart != null){
                const indexProd = foundCart.products.findIndex(prod => prod.product._id == productId);
                if (indexProd != -1){
                    foundCart.products[indexProd].quantity ++;
                }else{
                    const newProd = {
                        product: productId,
                        quantity : 1
                    }
                    foundCart.products.push(newProd)
                }
                const result = await Carts.updateOne({"_id": cartId}, foundCart)
                if(!result){
                    throw new Error('Error Adding Product To Cart');
                }
            }else{
                throw new Error('Cart Not Found');
            }
        }catch(error){
            throw error;
        }
    }

    async deleteFromCart(productId, cartId){
        try{
            const foundCart = await Carts.findOne({_id:cartId});
            if(foundCart != null){
                const existeProd = (foundCart.products).some(prod => toString(prod.product) === toString(productId.trim))
                if(existeProd){
                    foundCart.products = (foundCart.products).filter(prod => String(prod.product._id) !== String(productId));
                    const result = await Carts.updateOne({"_id": cartId}, {$set: {products: foundCart.products}});
                    if(!result){
                        throw new Error('Error Deleting Product From Cart');
                    }
                }else{
                    throw new Error('Product Not Found');
                }
            }else{
                throw new Error('Cart Not Found');
            }
        }catch(error){
            throw error;
        }
    }

    async updateCart(id, value){
        try{
            const returnUpdate = await CartModel.findByIdAndUpdate(id, {$set: value})
            if(!returnUpdate){
                throw new Error('Error Updating Cart');
            }
            return returnUpdate;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    /*async clearCart(cartId){
        try{
            const foundCart = await Carts.findOne({_id: cartId});
            if(foundCart != null){
                const result = await Carts.updateOne({"_id": cartId}, {$set: {"products": []}});
                if(!result){
                    throw new Error('Error Clearing The Cart');
                }
            }else{
                throw new Error('Cart Not found');
            }
        }catch(error){
            throw error;
        }
    } */

}

module.exports = CartManager