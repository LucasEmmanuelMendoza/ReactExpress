const CartManager = require("../manager/cart.manager")
const cartManager = new CartManager();

class CartController{
    async createCart(req, res){
        try{
            await cartManager.createCart();
            return res.status(200).json({message: 'Cart Created Successfully'});
        }catch(error){
            if(error.message === 'Error Creating A New Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteCart(req, res){
        const { cid: cartId } = req.params;
        try{
            await cartManager.deleteCart(cartId);
            return res.status(200).json({message: 'Cart Deleted Successfully'});
        }catch(error){
            if(error.message === 'Cart Not Found' || error.message === 'Error Deleting Cart'){
                return res.status(400).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async findCartById(req, res){
        const { cid: cartId } = req.params
        try{
            const foundCart = await cartManager.getCartById(cartId);
            return res.status(200).json(foundCart);
        }catch(error){
            if(error.message === 'Cart Not Found' || error.message === 'Error Getting Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async addToCart(req, res){
        const {pid: prodId, cid: cartId} = req.params;
        try{
            await cartManager.addToCart(prodId, cartId);
            return res.status(200).json({message: 'Product Added To Cart'});
        }catch(error){
            if(error.message === 'Cart Not Found' || error.message === 'Error Adding Product To Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteProductFromCart(req, res){
        const { pid: prodId, cid: cartId} = req.params
        try{
            await cartManager.deleteFromCart(prodId, cartId);
            return res.status(200).json({message: 'Product Deleted From Cart Successfully'});
        }catch(error){
            if(error.message === 'Cart Not Found' || error.message === 'Product Not Found' || error.message === 'Error Deleting Product From Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    
    async clearCart(req, res){
        const { cid: cartId } = req.params;
        try{
            await cartManager.updateCart(cartId, {"products": []});
            return res.status(200).json({message: 'Cart Cleared'});
        }catch(error){
            if(error.message === 'Error Updating Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }    
}

module.exports = CartController