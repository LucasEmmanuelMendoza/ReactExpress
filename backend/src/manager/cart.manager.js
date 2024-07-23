const CartModel = require("../dao/db/models/cart.model");

class CartManager{
    async createCart(){
        try{
            return returnCreate = await CartModel.create([])
        }catch(error){
            console.log(error);
            throw error;
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
            throw error;
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
            throw error;
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
            throw error;
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
                await Carts.updateOne({"_id": cartId}, foundCart)
                return {success: true}
            }else{
                return {success: false, message: 'Cart not found'};
            }
        }catch(error){
            console.log('Error in CartManager .addProduct', error);
            throw error
        }
    }

    async deleteFromCart(productId, cartId){
        try{
            const foundCart = await Carts.findOne({_id:cartId});
            if(foundCart != null){
                const existeProd = (foundCart.products).some(prod => toString(prod.product) === toString(productId.trim))
                if(existeProd){
                    foundCart.products = (foundCart.products).filter(prod => String(prod.product._id) !== String(productId));
                    await Carts.updateOne({"_id": cartId}, {$set: {products: foundCart.products}});
                    return true;
                }
            }
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async clearCart(cartId){
        try{
            const foundCart = await Carts.findOne({_id: cartId});
            if(foundCart != null){
                await Carts.updateOne({"_id": cartId}, {$set: {"products": []}});
                return true;
            }
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = CartManager