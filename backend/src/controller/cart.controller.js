const CartManager = require("../manager/cart.manager")
const cartManager = new CartManager();

class CartController{
    createCart = async(req, res)=>{
        try{
            const result = await cartManager.createCart();
            console.log('create Cart:', result);
            return res.status(200).json({message: 'Cart Created Successfully'});
        }catch(error){
            if(error.message === 'Error Creating A New Cart'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    deleteCart = async(req, res)=>{
        const cartId = req.params.cid;
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

     findCartById=async(req, res)=>{
        const cartId = req.params.cid;
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

     addToCart=async(req, res)=>{
        const cartId = req.params.cid;
        const prodId = req.params.pid;
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

     deleteProductFromCart=async(req, res)=>{
        const cartId = req.params.cid;
        const prodId = req.params.pid;
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
    
     clearCart=async(req, res)=>{
        const cartId = req.params.cid;
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