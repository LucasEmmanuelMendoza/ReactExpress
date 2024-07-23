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

    async getProduct(id){
        try{
            const result = await ProductModel.findById({_id: id})
            if(!result){
                throw new Error('Product not found');
            }
            return result;
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async addProduct(value){
        try{
            return await ProductModel.create(value)
        }catch(error){
            console.log('ERROR:', error)
            return error;        
        }
    }
    
    async deleteProduct(id){
        try{
            const result = await ProductModel.findByIdAndDelete({_id: id})
            if(!result){
                throw new Error('Product not found');
            }
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }

    async updateProduct(id, value){
        try{
            const result = await ProductModel.findByIdAndUpdate(id, {$set: value})
            if(!result){
                throw new Error('Product not found');
            }
        }catch(error){
            console.log('ERROR:', error)
            return error;
        }
    }
}

module.exports = ProductManager