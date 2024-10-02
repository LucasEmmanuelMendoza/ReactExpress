const ProductManager = require("../manager/product.manager")
const productManager = new ProductManager()

class ProductController{
    getProducts = async(req, res) => {
        try{
            const products = await productManager.getProducts();
            return res.status(200).json(products);
        }catch(error){
            console.log('Error ProductController - getProducts:', error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    getProductById = async(req, res) => {
        try{
            const product = await productManager.getProduct(req.params.pid)
            return res.status(200).json(product);
        }catch(error){
            console.log('Error ProductController - getProductById:', error);
            if(error.message === 'Product not found'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    deleteProductById = async(req, res) => {
        try{
            await productManager.deleteProduct(req.params.pid)
            return res.status(200).json({message: 'Product Successfully Deleted'});
        }catch(error){
            console.log('Error ProductController - deleteProductById:', error);
            if(error.message === 'Product Not Found'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    addProduct = async(req, res) => {
        try{
            await productManager.addProduct(req.body);
            return res.status(200).json({message: 'Product Successfully Added'});
        }catch(error){
            console.log('Error ProductController - addProduct:', error);
            if(error.message === 'Error Creating A Product' || error.message === 'Code Must Be Unique'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    updateProduct = async(req, res)=>{
        try{
            await productManager.updateProduct(req.params.pid, req.body)
            res.status(200).json({message: 'Producto actualizado'});
        }catch(error){
            console.log('Error ProductController - updateProduct:', error);
            if(error.message = 'Product not found'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = ProductController