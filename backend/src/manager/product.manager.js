const ProductModel = require('../dao/db/models/product.model');

class ProductManager{
    async getProducts(){
        try{
            return await ProductModel.find()
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async getProductById(id){
        try{
            return await ProductModel.findById({_id: id})
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async addProduct(value){
        try{
            const retorno = await ProductModel.create(value)
            console.log('retorno manager:', retorno)
            return retorno
        }catch(error){
            console.log('ERROR:', error)
            return error;        
        }
    }
    
    async deleteProduct(id){
        try{
            return await ProductModel.findByIdAndDelete({_id: id})
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async updateProduct(id, value){
        try{
            return await ProductModel.findByIdAndUpdate(id, {$set: value})
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }
}

module.exports = ProductManager