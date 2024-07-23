const ProductManager = require("../manager/product.manager")
const productManager = new ProductManager()

class ProductController{
    async getProducts(req, res){
        try{
            const products = await productManager.getProducts();
            return res.status(200).json(products);
        }catch(error){
            console.log('Error ProductController - getProducts:', error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteProductById(req, res){
        const { id } = req.params;
        try{
            await productManager.deleteProduct(id);
            return res.status(200).json({message: 'Product deleted'});
        }catch(error){
            console.log('Error ProductController - deleteProductById:', error);
            if(error.message = 'Product not found'){
                return res.status(404).json({error: 'Product not found'});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async getProductById(req, res){
        const { id } = req.params;
        try{
            const product = await productManager.getProduct(id)
            return res.status(200).json(product);
        }catch(error){
            console.log('Error ProductController - getProductById:', error);
            if(error.message = 'Product not found'){
                return res.status(404).json({error: 'Product not found'});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async addProduct(req, res){
        const { value } = req.body;
        try{
            await productManager.addProduct(value);
            return res.status(200).json('Producto creado');
        }catch(error){
            console.log('Error ProductController - addProduct:', error);
            if(error.message = 'Error creating product'){
                return res.status(404).json({error: 'Error creating product'});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async updateProduct(req, res){
        const { id, value } = req.params
        try{
            await productManager.updateProduct(id, value)
            res.status(200).json({message: 'Producto actualizado'});
        }catch(error){
            console.log('Error ProductController - updateProduct:', error);
            if(error.message = 'Product not found'){
                return res.status(404).json({error: 'Product not found'});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = ProductController