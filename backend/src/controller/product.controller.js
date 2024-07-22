const ProductManager = require("../manager/product.manager")
const productManager = new ProductManager()

class ProductController{
    async getProducts(){
        try{
            const products = await productManager.getProducts()
            if(products != null){
                return products
            }
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async getProductById(id){
        try{
            const product = await productManager.getProductById(id)
            if(product != null){
                return product
            }
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async addProduct(value){
        try{
            const retornoAdd = await productManager.addProduct(value);
            if(retornoAdd){
                return true
            }
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async deleteProductById(id){
        try{

        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }
}

module.exports = ProductController